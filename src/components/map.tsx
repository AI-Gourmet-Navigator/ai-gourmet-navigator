'use client'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'
import { env } from '@/env'
import { center } from '../app/result/constants'

import { MarkerWithInfoWindow } from './marker-with-infowindow'
import { type Restaurant } from './tab'

export function Map({ restaurants }: { restaurants: Restaurant[] }) {
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
              id,
              location,
              name,
              imageUrls,
              rating,
              ratingsTotal,
              isFavorite,
            }) => (
              <MarkerWithInfoWindow
                key={`${id}-map`}
                placeId={id}
                location={location}
                name={name}
                imageUrls={imageUrls}
                rating={rating}
                ratingsTotal={ratingsTotal}
                isFavorite={isFavorite}
                isMap
              />
            ),
          )}
        </GoogleMap>
      </APIProvider>
    </div>
  )
}
