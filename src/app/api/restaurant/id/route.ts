import { checkIsFavorite } from '@/lib/checkIsFavorite'
import { fetchPlaceDetails } from '@/lib/google-map'
import type { PlaceDetails } from '@/lib/google-map'

export interface DetailedRestaurant extends PlaceDetails {
  isFavorite?: boolean
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
      return Response.json({
        message: 'Failed to get restaurant data',
        status: 500,
      })
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
    return Response.json({
      message: 'Internal Server Error at api/restaurant.id',
      status: 500,
    })
  }
}
