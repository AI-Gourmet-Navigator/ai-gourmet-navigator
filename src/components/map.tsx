'use client'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'
import { env } from '@/env'
import { center } from '../app/result/constants'
import { MOCK_RESTAURANTS } from '@/app/result/mock'
import { MarkerWithInfoWindow } from './marker-with-infowindow'

export function Map() {
  return (
    <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAP_API}>
      <GoogleMap
        mapId={'bf51a910020fa25a'}
        style={{ width: '100vw', height: '95vh' }}
        defaultCenter={center}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {MOCK_RESTAURANTS.map(
          ({
            id,
            location,
            name,
            imageUrl,
            rating,
            ratingsTotal,
            isFavorite,
          }) => (
            <MarkerWithInfoWindow
              key={id}
              location={location}
              name={name}
              imageUrl={imageUrl}
              rating={rating}
              ratingsTotal={ratingsTotal}
              isFavorite={isFavorite}
            />
          ),
        )}
      </GoogleMap>
    </APIProvider>
  )
}
