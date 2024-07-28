'use client'
import { InfoWindowCard } from './infowindow-card'
import { type Restaurant } from './tab'

export function List({ restaurants }: { restaurants: Restaurant[] }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-1 justify-center gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-4">
        {restaurants.map(
          ({ id, name, imageUrls, rating, ratingsTotal, isFavorite }) => (
            <InfoWindowCard
              key={`${id}-list`}
              placeId={id}
              name={name}
              imageUrls={imageUrls}
              rating={rating}
              ratingsTotal={ratingsTotal}
              isFavorite={isFavorite}
            />
          ),
        )}
      </div>
    </div>
  )
}
