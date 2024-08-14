import { z } from 'zod'
import type {
  ScoredPineconeRecord,
  RecordMetadata,
} from '@pinecone-database/pinecone'
import { getEmbedData } from './utils/cohere'
import { getAllNamespaces, similaritySearch } from './utils/pinecone'
import { fetchPlaceDetails, type PlaceDetails } from '../../../lib/google-map'
import { getImageUrls } from '@/lib/get-image-urls'
import { checkIsFavorite } from '@/lib/checkIsFavorite'
import { getServerAuthSession } from '@/server/auth'

export interface Restaurants extends PlaceDetails {
  score?: number
}

export interface ModifiedRestaurant {
  id: string
  name: string
  location: {
    lat: number
    lng: number
  }
  imageUrls: string[]
  rating: number
  ratingsTotal: number
  score?: number
  isFavorite: boolean
}

const nonEmptyString = z.string().min(1, { message: 'String cannot be empty' })

const RestaurantPreferencesSchema = z.object({
  genre: nonEmptyString,
  atmosphere: nonEmptyString,
  rate: z
    .number()
    .min(1, { message: 'Rate must be at least 1' })
    .max(5, { message: 'Rate must be at most 5' }),
  numberOfRatings: z
    .number()
    .min(0, { message: 'Number of Ratings must be at least 0' }),
  placeLevel: z
    .number()
    .min(1, { message: 'Place Level must be at least 1' })
    .max(5, { message: 'Place Level must be at most 5' }),
  location: nonEmptyString,
})

type RestaurantPreferences = z.infer<typeof RestaurantPreferencesSchema>

export async function POST(req: Request) {
  const session = await getServerAuthSession()
  if (session === null) {
    return new Response('Invalid data update!', { status: 400 })
  }
  const userId = session.user.id
  try {
    const request = (await req.json()) as RestaurantPreferences
    const result = RestaurantPreferencesSchema.safeParse(request)
    if (!result.success) {
      return new Response(`Invalid input`, {
        status: 400,
      })
    }
    const { genre, atmosphere, rate, numberOfRatings, placeLevel, location } =
      result.data

    const text = `Genre: ${genre}\n Atmosphere: ${atmosphere} Location: ${location} Rating: ${rate} Total number of ratings: ${numberOfRatings} Price Level: ${placeLevel}`

    let embedData: number[][]
    try {
      embedData = (await getEmbedData([text])) as number[][]
      if (!embedData?.[0])
        return new Response('Failed to get embed data', { status: 500 })
    } catch (error) {
      console.error('Error fetching embed data:', error)
      return new Response('Failed to get embed data', { status: 500 })
    }

    let namespaces: string[]
    try {
      namespaces = await getAllNamespaces()
    } catch (error) {
      console.error('Error fetching namespaces:', error)
      return new Response('Failed to get namespaces', { status: 500 })
    }

    let matches: ScoredPineconeRecord<RecordMetadata>[] = []
    for (const namespace of namespaces) {
      try {
        const response = await similaritySearch(embedData[0], namespace)
        matches = [...matches, ...response.matches]
      } catch (error) {
        console.error(
          `Error fetching similarity search for namespace ${namespace}:`,
          error,
        )
        return new Response('Failed to perform similarity search', {
          status: 500,
        })
      }
    }

    matches = matches
      .filter((item) => item.score !== undefined) // Filter out items with score undefined
      .sort((a, b) => b.score! - a.score!) // Sort the array by score in descending order
      .slice(0, 3) // Get the first 3 elements

    const results = []
    for (const match of matches) {
      try {
        const details = await fetchPlaceDetails(match.id)
        if (!details || details?.status !== 'OK') {
          return new Response('Failed to get restaurant data', { status: 500 })
        }
        const {
          place_id,
          name,
          geometry: { location },
          photos,
          rating,
          user_ratings_total,
        } = details.result
        results.push({
          id: place_id,
          name,
          location,
          imageUrls: getImageUrls(photos),
          rating,
          ratingsTotal: user_ratings_total,
          score: match.score,
          isFavorite: await checkIsFavorite({ placeId: place_id, userId }),
        })
      } catch (error) {
        console.error(`Error fetching place details for ID ${match.id}:`, error)
        return new Response('Failed to get restaurant data', { status: 500 })
      }
    }

    return Response.json(results, { status: 200 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
