import type { Meta, StoryObj } from '@storybook/react'
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
}

export const DetailWithFavorite: Story = {
  args: {
    restaurant: { ...MOCK_RESTAURANT_DETAILS_WITH_IS_FAVORITE },
  },
}
