import { db } from '@/server/db'
import { getServerAuthSession } from '@/server/auth'

export async function POST(req: Request) {
  try {
    const session = await getServerAuthSession()
    if (session === null) {
      return Response.json({ message: 'Invalid data update!', status: 400 })
    }

    // Extract placeId from the request body
    const { placeId } = (await req.json()) as { placeId: string }
    const userId = session.user.id

    // Validate the extracted data
    if (!placeId || !userId) {
      return Response.json({
        message: 'Missing placeId or userId',
        status: 400,
      })
    }

    // Check if the placeId already exists for the user
    const existingFavorite = await db.favorite.findFirst({
      where: {
        placeId,
        userId,
      },
    })

    if (existingFavorite) {
      // If it exists, remove it
      await db.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      })
      return Response.json(
        { message: 'Favorite removed' },
        {
          status: 200,
        },
      )
    } else {
      // If it doesn't exist, add it
      const newFavorite = await db.favorite.create({
        data: {
          placeId,
          userId,
        },
      })
      return Response.json(newFavorite, { status: 201 })
    }
  } catch (error) {
    console.error('Error toggling favorite:', error)
    return Response.json({ message: 'Internal Server Error', status: 500 })
  }
}
