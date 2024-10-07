import { NextResponse } from 'next/server'
import { env } from '@/env'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return new Response('Missing placeId', { status: 400 })
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=${reference}&key=${env.GOOGLE_MAP_API}`,
    )

    if (!response.ok) {
      return new Response('Failed to fetch the image', { status: 500 })
    }

    // Get the image data as a buffer
    const imageBuffer = await response.arrayBuffer() // Use arrayBuffer for binary data

    // Set the headers and return the image as a buffer
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg', // Adjust based on the image type
        'Cache-Control': 'public, max-age=31536000, immutable', // Optional: caching headers
      },
    })
  } catch (error) {
    return new Response('Internal Server Error at api/image', {
      status: 500,
    })
  }
}
