import type { Meta, StoryObj } from '@storybook/react'
import { InfoWindowCard } from '@/components/infowindow-card'

const meta = {
  title: 'Components/InfoWindowCard',
  component: InfoWindowCard,
} satisfies Meta<typeof InfoWindowCard>

export default meta

type Story = StoryObj<typeof meta>

export const Favorite: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrls: [
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
    ],
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: true,
    isMap: false,
    placeId: '1',
  },
}

export const NotFavorite: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrls: [
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
    ],
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: false,
    isMap: false,
    placeId: '1',
  },
}

export const SingleImage: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrls: [`https://loremflickr.com/640/360`],
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: false,
    isMap: false,
    placeId: '1',
  },
}

export const MapMode: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrls: [
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
    ],
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: false,
    isMap: true,
    placeId: '1',
  },
}

export const mapModeWithFav: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrls: [
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
      `https://loremflickr.com/640/360`,
    ],
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: true,
    isMap: true,
    placeId: '1',
  },
}
