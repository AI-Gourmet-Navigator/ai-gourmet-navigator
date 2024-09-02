export const MOCK_RESTAURANT_DETAILS = {
  address_components: [
    {
      long_name: '123',
      short_name: '123',
      types: ['street_number'],
    },
    {
      long_name: 'Main Street',
      short_name: 'Main St',
      types: ['route'],
    },
    {
      long_name: 'Downtown',
      short_name: 'Downtown',
      types: ['neighborhood', 'political'],
    },
    {
      long_name: 'Vancouver',
      short_name: 'Vancouver',
      types: ['locality', 'political'],
    },
    {
      long_name: 'British Columbia',
      short_name: 'BC',
      types: ['administrative_area_level_1', 'political'],
    },
    {
      long_name: 'Canada',
      short_name: 'CA',
      types: ['country', 'political'],
    },
    {
      long_name: 'V6B 1G1',
      short_name: 'V6B 1G1',
      types: ['postal_code'],
    },
  ],
  adr_address:
    '<span class="street-address">123 Main St</span>, <span class="locality">Vancouver</span>, <span class="region">BC</span> <span class="postal-code">V6B 1G1</span>, <span class="country-name">Canada</span>',
  business_status: 'OPERATIONAL',
  current_opening_hours: {
    open_now: true,
    periods: [
      {
        close: { day: 1, time: '2200' },
        open: { day: 1, time: '0800' },
      },
      {
        close: { day: 2, time: '2200' },
        open: { day: 2, time: '0800' },
      },
    ],
    weekday_text: ['Monday: 8:00 AM – 10:00 PM', 'Tuesday: 8:00 AM – 10:00 PM'],
  },
  delivery: true,
  dine_in: true,
  formatted_address: '123 Main St, Vancouver, BC V6B 1G1, Canada',
  formatted_phone_number: '(123) 456-7890',
  geometry: {
    location: { lat: 49.2827, lng: -123.1207 },
    viewport: {
      northeast: { lat: 49.287, lng: -123.115 },
      southwest: { lat: 49.278, lng: -123.125 },
    },
  },
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
  icon_background_color: '#FF0000',
  icon_mask_base_uri:
    'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/',
  international_phone_number: '+1 123-456-7890',
  name: 'Mock Restaurant',
  opening_hours: {
    open_now: true,
    periods: [
      {
        close: { day: 1, time: '2200' },
        open: { day: 1, time: '0800' },
      },
      {
        close: { day: 2, time: '2200' },
        open: { day: 2, time: '0800' },
      },
    ],
    weekday_text: ['Monday: 8:00 AM – 10:00 PM', 'Tuesday: 8:00 AM – 10:00 PM'],
  },
  photos: [
    {
      height: 1080,
      html_attributions: ['<a href="https://example.com">Example</a>'],
      photo_reference: 'CmRaAAAA...',
      width: 1920,
    },
  ],
  place_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
  plus_code: {
    compound_code: '7Q6X+FF Vancouver, British Columbia, Canada',
    global_code: '849V7Q6X+FF',
  },
  price_level: 2,
  rating: 4.5,
  reference: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
  reservable: true,
  reviews: [
    {
      author_name: 'John Doe',
      author_url: 'https://www.example.com/john_doe',
      language: 'en',
      original_language: 'en',
      profile_photo_url: 'https://www.example.com/photo.jpg',
      rating: 5,
      relative_time_description: 'a week ago',
      text: 'Great food and excellent service!',
      time: 1654693200,
      translated: false,
    },
  ],
  serves_beer: true,
  serves_breakfast: true,
  serves_brunch: true,
  serves_dinner: true,
  serves_lunch: true,
  serves_vegetarian_food: true,
  serves_wine: true,
  takeout: true,
  types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  url: 'https://www.example.com/mock_restaurant',
  user_ratings_total: 128,
  utc_offset: -480,
  vicinity: '123 Main St, Vancouver',
  website: 'https://www.example.com',
  wheelchair_accessible_entrance: true,
}
export const MOCK_RESTAURANT_DETAILS_WITH_IS_FAVORITE = {
  address_components: [
    {
      long_name: '123',
      short_name: '123',
      types: ['street_number'],
    },
    {
      long_name: 'Main Street',
      short_name: 'Main St',
      types: ['route'],
    },
    {
      long_name: 'Downtown',
      short_name: 'Downtown',
      types: ['neighborhood', 'political'],
    },
    {
      long_name: 'Vancouver',
      short_name: 'Vancouver',
      types: ['locality', 'political'],
    },
    {
      long_name: 'British Columbia',
      short_name: 'BC',
      types: ['administrative_area_level_1', 'political'],
    },
    {
      long_name: 'Canada',
      short_name: 'CA',
      types: ['country', 'political'],
    },
    {
      long_name: 'V6B 1G1',
      short_name: 'V6B 1G1',
      types: ['postal_code'],
    },
  ],
  adr_address:
    '<span class="street-address">123 Main St</span>, <span class="locality">Vancouver</span>, <span class="region">BC</span> <span class="postal-code">V6B 1G1</span>, <span class="country-name">Canada</span>',
  business_status: 'OPERATIONAL',
  current_opening_hours: {
    open_now: true,
    periods: [
      {
        close: { day: 1, time: '2200' },
        open: { day: 1, time: '0800' },
      },
      {
        close: { day: 2, time: '2200' },
        open: { day: 2, time: '0800' },
      },
    ],
    weekday_text: ['Monday: 8:00 AM – 10:00 PM', 'Tuesday: 8:00 AM – 10:00 PM'],
  },
  delivery: true,
  dine_in: true,
  formatted_address: '123 Main St, Vancouver, BC V6B 1G1, Canada',
  formatted_phone_number: '(123) 456-7890',
  geometry: {
    location: { lat: 49.2827, lng: -123.1207 },
    viewport: {
      northeast: { lat: 49.287, lng: -123.115 },
      southwest: { lat: 49.278, lng: -123.125 },
    },
  },
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
  icon_background_color: '#FF0000',
  icon_mask_base_uri:
    'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/',
  international_phone_number: '+1 123-456-7890',
  name: 'Mock Restaurant',
  opening_hours: {
    open_now: true,
    periods: [
      {
        close: { day: 1, time: '2200' },
        open: { day: 1, time: '0800' },
      },
      {
        close: { day: 2, time: '2200' },
        open: { day: 2, time: '0800' },
      },
    ],
    weekday_text: ['Monday: 8:00 AM – 10:00 PM', 'Tuesday: 8:00 AM – 10:00 PM'],
  },
  photos: [
    {
      height: 1080,
      html_attributions: ['<a href="https://example.com">Example</a>'],
      photo_reference: 'CmRaAAAA...',
      width: 1920,
    },
  ],
  place_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
  plus_code: {
    compound_code: '7Q6X+FF Vancouver, British Columbia, Canada',
    global_code: '849V7Q6X+FF',
  },
  price_level: 2,
  rating: 4.5,
  reference: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
  reservable: true,
  reviews: [
    {
      author_name: 'John Doe',
      author_url: 'https://www.example.com/john_doe',
      language: 'en',
      original_language: 'en',
      profile_photo_url: 'https://www.example.com/photo.jpg',
      rating: 5,
      relative_time_description: 'a week ago',
      text: 'Great food and excellent service!',
      time: 1654693200,
      translated: false,
    },
  ],
  serves_beer: true,
  serves_breakfast: true,
  serves_brunch: true,
  serves_dinner: true,
  serves_lunch: true,
  serves_vegetarian_food: true,
  serves_wine: true,
  takeout: true,
  types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  url: 'https://www.example.com/mock_restaurant',
  user_ratings_total: 128,
  utc_offset: -480,
  vicinity: '123 Main St, Vancouver',
  website: 'https://www.example.com',
  wheelchair_accessible_entrance: true,
  isFavorite: true,
}
