import type { Meta, StoryObj } from '@storybook/react'
import { Detail } from '@/components/detail'

const meta: Meta<typeof Detail> = {
  title: 'Components/RestaurantDetail',
  component: Detail,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Detail>

export default meta

type Story = StoryObj<typeof meta>

const MOCK_RESTAURANT_DETAILS = {
  id: 'ChIJJ_oZQcpzhlQRYmMyGpKp7PA',
  name: "Farmer's Apprentice Restaurant",
  location: { lat: 49.2663397, lng: -123.1396572 },
  rating: 4.4,
  ratingsTotal: 382,
  url: 'https://maps.google.com/?cid=7298221253814641466',
  website: 'https://sushiinnvancouver.ca/',
  formatted_address: '3772 W 10th Ave, Vancouver, BC V6R 2G4, Canada',
  serves_vegetarian_food: true,
  takeout: true,
  delivery: false,
  dine_in: true,
  wheelchair_accessible_entrance: false,
  reservable: true,
  price_level: 2,
  opening_hours: {
    open_now: true,
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
  photos: [
    {
      imageUrl: 'https://loremflickr.com/360/640',
    },
    {
      imageUrl: 'https://loremflickr.com/360/640',
    },
    {
      imageUrl: 'https://loremflickr.com/360/640',
    },
    {
      imageUrl: 'https://loremflickr.com/360/640',
    },
    {
      imageUrl: 'https://loremflickr.com/360/640',
    },
  ],
  reviews: [
    {
      profile_photo_url: 'https://loremflickr.com/360/360',
      author_name: 'John Doe',
      rating: 5,
      text: 'This is a sample review comment.',
      relative_time_description: '2 days ago',
    },
    {
      profile_photo_url: 'https://loremflickr.com/360/360',
      author_name: 'Jane Doe',
      rating: 4,
      text: 'Another sample review comment.',
      relative_time_description: '3 days ago',
    },
  ],
}

export const Default: Story = {
  args: {
    isFavorite: true,
    restaurant: MOCK_RESTAURANT_DETAILS,
  },
}
