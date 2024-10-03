import { type Photo } from '@/lib/google-map'

export function getImageUrls(photos: Photo[] = []) {
  return photos.map((photo) => photo.photo_reference)
}
