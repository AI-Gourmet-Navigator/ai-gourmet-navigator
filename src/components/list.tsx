'use client'
import { InfoWindowCard } from './infowindow-card'
import { type Restaurants } from '@/app/api/preference/route'

interface List {
  restaurants: Restaurants[]
}

export function List({ restaurants }: List) {
  // Need to add isFavorite later
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-1 justify-center gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-4">
        {restaurants.map(
          ({ place_id, name, photos, rating, user_ratings_total }) => (
            <InfoWindowCard
              key={`${place_id}-list`}
              placeId={place_id}
              name={name}
              imageUrls={photos?.map((photo) => photo.photo_reference) ?? []}
              rating={rating}
              ratingsTotal={user_ratings_total}
              isFavorite={false}
            />
          ),
        )}
      </div>
    </div>
  )
}
