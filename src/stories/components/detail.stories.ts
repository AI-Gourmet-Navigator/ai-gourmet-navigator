import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Detail } from '@/components/detail'
import {
  MOCK_RESTAURANT_DETAILS,
  MOCK_RESTAURANT_DETAILS_WITH_IS_FAVORITE,
} from '@/app/restaurant-detail/[placeId]/mock'

const meta: Meta<typeof Detail> = {
  title: 'Components/RestaurantDetail',
  component: Detail,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Detail>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    restaurant: { ...MOCK_RESTAURANT_DETAILS },
  },
  parameters: {
    session: {
      status: 'unknown',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const favoriteButton = canvas.queryByTestId('favorite')
    await expect(favoriteButton).not.toBeInTheDocument()
  },
}

export const DetailWithFavorite: Story = {
  args: {
    restaurant: { ...MOCK_RESTAURANT_DETAILS_WITH_IS_FAVORITE },
  },
  parameters: {
    session: {
      status: 'authenticated',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const favoriteButton = canvas.getByTestId('favorite')
    await expect(favoriteButton).toBeInTheDocument()
  },
}
