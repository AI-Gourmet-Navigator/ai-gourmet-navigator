import { db } from '@/server/db'
import { fetchPlaceDetails } from '@/lib/google-map'
import { getImageUrls } from '../../../../lib/get-image-urls'

export async function GET(req: Request) {
  try {
    // Extract userId from query parameters
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    // Validate the extracted data
    if (!userId) {
      return Response.json({ message: 'Missing userId', status: 400 })
    }

    // Query the database to get all favorites for the user
    const favorites = await db.favorite.findMany({
      where: {
        userId,
      },
    })

    const favRestaurants = []

    for (const favorite of favorites) {
      const restaurant = await fetchPlaceDetails(favorite.placeId)
      favRestaurants.push({
        id: favorite.placeId,
        name: restaurant?.result.name,
        location: restaurant?.result.geometry.location,
        imageUrls: getImageUrls(restaurant?.result.photos),
        rating: restaurant?.result.rating,
        ratingsTotal: restaurant?.result.user_ratings_total,
        isFavorite: true,
      })
    }

    // Return the favorites as a JSON response
    return Response.json(favRestaurants, {
      status: 200,
    })
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return Response.json({ message: 'Internal Server Error', status: 500 })
  }
}
