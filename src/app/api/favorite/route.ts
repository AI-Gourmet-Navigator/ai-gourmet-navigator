import { db } from '@/server/db'
import { getServerAuthSession } from '@/server/auth'

export async function POST(req: Request) {
  try {
    const session = await getServerAuthSession()
    if (session === null) {
      return new Response('Invalid data update!', { status: 400 })
    }

    // Extract placeId from the request body
    const { placeId } = (await req.json()) as { placeId: string }
    const userId = session.user.id

    // Validate the extracted data
    if (!placeId || !userId) {
      return new Response('Missing placeId or userId', { status: 400 })
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
      return new Response(JSON.stringify({ message: 'Favorite removed' }), {
        status: 200,
      })
    } else {
      // If it doesn't exist, add it
      const newFavorite = await db.favorite.create({
        data: {
          placeId,
          userId,
        },
      })
      return new Response(JSON.stringify(newFavorite), { status: 201 })
    }
  } catch (error) {
    console.error('Error toggling favorite:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
