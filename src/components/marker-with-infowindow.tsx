import React from 'react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
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
  handleMarkerClick: () => void
  isCardOpen: boolean
}

export function MarkerWithInfoWindow({
  location,
  handleMarkerClick,
  isCardOpen,
  ...rest
}: MarkerWithInfoWindowProps) {
  // const [infoWindowOpen, setInfoWindowOpen] = useState(false)
  const [markerRef, marker] = useAdvancedMarkerRef()
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={location}
        onClick={handleMarkerClick}
      >
        <Pin background={'#e11c48'} glyphColor={'#fff'} borderColor={'#fff'} />
        {isCardOpen && (
          <InfoWindow
            className="gm-card"
            style={{ padding: 0 }}
            anchor={marker}
            maxWidth={200}
          >
            <InfoWindowCard {...rest} />
          </InfoWindow>
        )}
      </AdvancedMarker>
    </>
  )
}
