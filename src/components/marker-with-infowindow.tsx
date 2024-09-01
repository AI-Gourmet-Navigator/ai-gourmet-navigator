import React, { useState } from 'react'
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'

import { InfoWindowCard } from './infowindow-card'

interface MarkerWithInfoWindowProps {
  location: {
    lat: number
    lng: number
  }
  placeId: string
  name: string
  imageUrls: string[]
  rating: number
  ratingsTotal: number
  isFavorite?: boolean
  isMap: boolean
}

export function MarkerWithInfoWindow({
  location,
  ...rest
}: MarkerWithInfoWindowProps) {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false)
  const [markerRef, marker] = useAdvancedMarkerRef()
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfoWindowOpen(true)}
        position={location}
      />
      {infoWindowOpen && (
        <InfoWindow
          className="gm-card"
          style={{ padding: 0 }}
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <InfoWindowCard {...rest} />
        </InfoWindow>
      )}
    </>
  )
}
