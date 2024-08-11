import type { Meta, StoryObj } from '@storybook/react'
import { Map } from '@/components/map'
import { MOCK_RESTAURANTS } from '../mocks/restaurants'

const meta = {
  title: 'Components/Map',
  component: Map,
  args: {
    restaurants: MOCK_RESTAURANTS,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Map>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    restaurants: [
      {
        place_id: '2',
        name: 'Pizza Corner',
        photos: [
          {
            photo_reference: 'https://loremflickr.com/640/360',
            height: 0,
            html_attributions: [],
            width: 0,
          },
          {
            photo_reference: 'https://loremflickr.com/640/360',
            height: 0,
            html_attributions: [],
            width: 0,
          },
        ],
        rating: 4.2,
        user_ratings_total: 98,
        address_components: [],
        adr_address: '',
        business_status: '',
        current_opening_hours: {
          open_now: true,
          periods: [],
          weekday_text: [
            'Monday: 11:00 AM – 12:45 AM',
            'Tuesday: 11:00 AM – 12:45 AM',
            'Wednesday: 11:00 AM – 12:45 AM',
            'Thursday: 11:00 AM – 12:45 AM',
            'Friday: 11:00 AM – 12:45 AM',
            'Saturday: 11:00 AM – 12:45 AM',
            'Sunday: 11:00 AM – 11:45 PM',
          ],
        },
        delivery: false,
        dine_in: false,
        formatted_address: '',
        formatted_phone_number: '',
        geometry: {
          location: {
            lat: 49.2663397,
            lng: -123.1396572,
          },
          viewport: {
            northeast: {
              lat: 49.2663397,
              lng: -123.1396572,
            },
            southwest: {
              lat: 49.2663397,
              lng: -123.1396572,
            },
          },
        },
        icon: '',
        icon_background_color: '',
        icon_mask_base_uri: '',
        international_phone_number: '',
        opening_hours: {
          open_now: true,
          periods: [],
          weekday_text: [
            'Monday: 11:00 AM – 12:45 AM',
            'Tuesday: 11:00 AM – 12:45 AM',
            'Wednesday: 11:00 AM – 12:45 AM',
            'Thursday: 11:00 AM – 12:45 AM',
            'Friday: 11:00 AM – 12:45 AM',
            'Saturday: 11:00 AM – 12:45 AM',
            'Sunday: 11:00 AM – 11:45 PM',
          ],
        },
        plus_code: {
          compound_code: '',
          global_code: '',
        },
        price_level: 0,
        reference: '',
        reservable: false,
        reviews: [],
        serves_beer: false,
        serves_breakfast: false,
        serves_brunch: false,
        serves_dinner: false,
        serves_lunch: false,
        serves_vegetarian_food: false,
        serves_wine: false,
        takeout: false,
        types: [],
        url: '',
        utc_offset: 0,
        vicinity: '',
        website: '',
        wheelchair_accessible_entrance: false,
      },
    ],
  },
}
