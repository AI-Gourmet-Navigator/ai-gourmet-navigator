import type { Meta, StoryObj } from '@storybook/react'
import RestaurantDetail from '@/app/restaurant-detail/[placeId]/page'
import { expect, userEvent, within } from '@storybook/test'

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

export const RestaurantDetailPage: Story = {
  args: {
    params: { placeId: 'some-place-id' },
    isFavorite: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const favoriteButton = canvas.getByRole('button', { name: /favorite/i })
    await expect(favoriteButton).toBeInTheDocument()

    await userEvent.click(favoriteButton)
    await expect(favoriteButton).toHaveClass('favorite')
  },
}
