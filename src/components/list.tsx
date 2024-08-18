'use client'
import { InfoWindowCard } from './infowindow-card'
import type { ModifiedRestaurant } from '@/app/api/preference/route'

interface List {
  restaurants: ModifiedRestaurant[]
}

export function List({ restaurants }: List) {
  // Need to add isFavorite later
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-1 justify-center gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-4">
        {restaurants.map(({ id, name, rating, ratingsTotal, imageUrls }) => (
          <InfoWindowCard
            key={`${id}-list`}
            placeId={id}
            name={name}
            imageUrls={imageUrls}
            rating={rating}
            ratingsTotal={ratingsTotal}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  )
}
