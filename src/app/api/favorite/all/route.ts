import { db } from '@/server/db'

export async function GET(req: Request) {
  try {
    // Extract userId from query parameters
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    // Validate the extracted data
    if (!userId) {
      return new Response('Missing userId', { status: 400 })
    }

    // Query the database to get all favorites for the user
    const favorites = await db.favorite.findMany({
      where: {
        userId,
      },
    })

    // Return the favorites as a JSON response
    return new Response(JSON.stringify(favorites), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
