import { type Photo } from '@/lib/google-map'
import { env } from '@/env'

export function getImageUrls(photos: Photo[] = []) {
  return photos.map(
    (photo) =>
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=${photo.photo_reference}&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
  )
}
