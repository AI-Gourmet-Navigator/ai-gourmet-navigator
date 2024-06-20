import type { Meta, StoryObj } from '@storybook/react'
import RestaurantDetail from '@/app/restaurant-detail/[placeId]/page'

const meta: Meta<typeof RestaurantDetail> = {
  title: 'Pages/RestaurantDetail',
  component: RestaurantDetail,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isFavorite: { control: 'boolean' },
  },
} satisfies Meta<typeof RestaurantDetail>

export default meta
type Story = StoryObj<typeof meta>

export const RestaurantDetailPageFavorite: Story = {
  args: {
    params: { placeId: '1' },
    isFavorite: false,
  },
}

export const RestaurantDetailPageNotFavorite: Story = {
  args: {
    params: { placeId: '2' },
    isFavorite: true,
  },
}
