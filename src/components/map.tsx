'use client'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'
import { env } from '@/env'
import { center } from '../app/result/constants'
import { MarkerWithInfoWindow } from './marker-with-infowindow'
import { type Restaurants } from '@/app/api/preference/route'

interface Map {
  restaurants: Restaurants[]
}

export function Map({ restaurants }: Map) {
  // Need to add isFavorite later
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 50px)',
      }}
    >
      <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAP_API}>
        <GoogleMap
          mapId={'bf51a910020fa25a'}
          style={{ width: '100%', height: '100%' }}
          defaultCenter={center}
          defaultZoom={13}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {restaurants.map(
            ({
              place_id,
              geometry,
              name,
              photos,
              rating,
              user_ratings_total,
            }) => {
              if (!geometry?.location) {
                console.error('Missing location data for restaurant:', name)
                return null // Skip rendering this marker
              }
              return (
                <MarkerWithInfoWindow
                  key={`${place_id}-map`}
                  placeId={place_id}
                  location={geometry.location}
                  name={name}
                  imageUrls={
                    photos?.map((photo) => photo.photo_reference) ?? []
                  }
                  rating={rating}
                  ratingsTotal={user_ratings_total}
                  isFavorite={false}
                  isMap
                />
              )
            },
          )}
        </GoogleMap>
      </APIProvider>
    </div>
  )
}
