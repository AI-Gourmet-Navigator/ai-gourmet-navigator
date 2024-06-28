interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface Period {
  close: { date?: string; day: number; time: string; truncated?: boolean }
  open: { date?: string; day: number; time: string; truncated?: boolean }
}

interface OpeningHours {
  open_now: boolean
  periods: Period[]
  weekday_text: string[]
}

interface Photo {
  height: number
  html_attributions: string[]
  photo_reference: string
  width: number
}

interface Review {
  author_name: string
  author_url: string
  language: string
  original_language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  translated: boolean
}

interface PlusCode {
  compound_code: string
  global_code: string
}

export interface PlaceDetails {
  address_components: AddressComponent[]
  adr_address: string
  business_status: string
  current_opening_hours: OpeningHours
  delivery: boolean
  dine_in: boolean
  formatted_address: string
  formatted_phone_number: string
  geometry: {
    location: { lat: number; lng: number }
    viewport: {
      northeast: { lat: number; lng: number }
      southwest: { lat: number; lng: number }
    }
  }
  icon: string
  icon_background_color: string
  icon_mask_base_uri: string
  international_phone_number: string
  name: string
  opening_hours: OpeningHours
  photos: Photo[]
  place_id: string
  plus_code: PlusCode
  price_level: number
  rating: number
  reference: string
  reservable: boolean
  reviews: Review[]
  serves_beer: boolean
  serves_breakfast: boolean
  serves_brunch: boolean
  serves_dinner: boolean
  serves_lunch: boolean
  serves_vegetarian_food: boolean
  serves_wine: boolean
  takeout: boolean
  types: string[]
  url: string
  user_ratings_total: number
  utc_offset: number
  vicinity: string
  website: string
  wheelchair_accessible_entrance: boolean
}

interface PlaceDetailsResponse {
  html_attributions: string[]
  result: PlaceDetails
  status: string
}

export async function fetchPlaceDetails(
  placeId: string,
): Promise<PlaceDetailsResponse | null> {
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_MAP_API}`

  try {
    const response = await fetch(apiUrl)
    const data = (await response.json()) as PlaceDetailsResponse
    return data
  } catch (error) {
    console.error('Error fetching place details:', error)
    return null
  }
}
