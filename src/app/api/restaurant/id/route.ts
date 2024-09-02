import { checkIsFavorite } from '@/lib/checkIsFavorite'
import { fetchPlaceDetails } from '@/lib/google-map'
import { getServerAuthSession } from '@/server/auth'
import type { PlaceDetails } from '@/lib/google-map'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/auth'

export interface DetailedRestaurant extends PlaceDetails {
  isFavorite?: boolean
}

export async function GET(req: Request) {
  try {
    // Extract userId from query parameters
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    // Validate the extracted data
    if (!userId) {
      return new Response('Missing userId', { status: 400 })
    }
    const placeId = searchParams.get('placeId')
    if (!placeId) {
      return Response.json({
        status: 400,
        message: 'Missing placeId or userId',
      })
    }
    const details = await fetchPlaceDetails(placeId)
    if (!details || details?.status !== 'OK') {
      return new Response('Failed to get restaurant data', { status: 500 })
    }

    return Response.json(
      {
        ...details.result,
        isFavorite: userId
          ? await checkIsFavorite({ placeId, userId })
          : undefined,
      },
      { status: 200 },
    )
  } catch (error) {
    return new Response('Internal Server Error at api/restaurant.id', {
      status: 500,
    })
  }
}
