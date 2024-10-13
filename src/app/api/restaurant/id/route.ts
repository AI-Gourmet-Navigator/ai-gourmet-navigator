import { checkIsFavorite } from '@/lib/checkIsFavorite'
import { getImageUrls } from '@/lib/get-image-urls'
import { fetchPlaceDetails } from '@/lib/google-map'
import type { PlaceDetails } from '@/lib/google-map'

export interface DetailedRestaurant extends Omit<PlaceDetails, 'photos'> {
  isFavorite?: boolean
  photos: string[]
}

export async function GET(req: Request) {
  try {
    // Extract userId from query parameters
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    const placeId = searchParams.get('placeId')
    if (!placeId) {
      return Response.json({
        status: 400,
        message: 'Missing placeId',
      })
    }
    const details = await fetchPlaceDetails(placeId)
    if (!details || details?.status !== 'OK') {
      return new Response('Failed to get restaurant data', {
        status: 500,
      })
    }

    return Response.json(
      {
        ...details.result,
        isFavorite: userId
          ? await checkIsFavorite({ placeId, userId })
          : undefined,
        photos: getImageUrls(details.result.photos),
      },
      { status: 200 },
    )
  } catch (error) {
    return new Response('Internal Server Error at api/restaurant.id', {
      status: 500,
    })
  }
}
