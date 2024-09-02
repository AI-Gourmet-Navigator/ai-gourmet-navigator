import type { Meta, StoryObj } from '@storybook/react'
import { InfoWindowCard } from '@/components/infowindow-card'

const meta = {
  title: 'Components/InfoWindowCard',
  component: InfoWindowCard,
  parameters: {
    session: {
      status: 'authenticated',
    },
  },
} satisfies Meta<typeof InfoWindowCard>

export default meta

type Story = StoryObj<typeof meta>

const BASE_PROPS = {
  name: "Farmer's Apprentice Restaurant",
  imageUrls: [
    `https://loremflickr.com/640/360`,
    `https://loremflickr.com/640/360`,
    `https://loremflickr.com/640/360`,
  ],
  rating: 4.4,
  ratingsTotal: 382,
  placeId: '1',
}

export const Favorite: Story = {
  args: {
    ...BASE_PROPS,
    isFavorite: true,
    isMap: false,
  },
}

export const NotFavorite: Story = {
  args: {
    ...BASE_PROPS,
    isFavorite: false,
    isMap: false,
  },
}

export const Logout: Story = {
  args: {
    ...BASE_PROPS,
    isMap: false,
  },
  parameters: {
    session: {
      status: 'unknown',
    },
  },
}

export const SingleImage: Story = {
  args: {
    ...BASE_PROPS,
    imageUrls: [`https://loremflickr.com/640/360`],
    isFavorite: false,
    isMap: false,
  },
}

export const MapMode: Story = {
  args: {
    ...BASE_PROPS,
    isFavorite: false,
    isMap: true,
  },
}

export const MapModeWithFav: Story = {
  args: {
    ...BASE_PROPS,
    isFavorite: true,
    isMap: true,
  },
}
