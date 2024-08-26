import type { PlaceDetailsResponse } from './google-map'
import { checkIsFavorite } from './checkIsFavorite'
import { getImageUrls } from './get-image-urls'

export async function normalizeRestaurant(
  details: PlaceDetailsResponse,
  userId?: string,
  score?: number,
) {
  const {
    place_id,
    name,
    geometry: { location },
    photos,
    rating,
    user_ratings_total,
  } = details.result

  return {
    id: place_id,
    name,
    location,
    imageUrls: getImageUrls(photos),
    rating,
    ratingsTotal: user_ratings_total,
    score: score,
    isFavorite: !!userId
      ? await checkIsFavorite({ placeId: place_id, userId })
      : undefined,
  }
}
