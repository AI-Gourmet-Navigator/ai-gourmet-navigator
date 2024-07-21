import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Tab } from '@/components/tab'

const mockRestaurants = [
  {
    id: '1',
    name: 'Sushi Place',
    location: { lat: 49.2827, lng: -123.1207 },
    imageUrls: [
      'https://example.com/images/sushi-place-1.jpg',
      'https://example.com/images/sushi-place-2.jpg',
    ],
    rating: 4.5,
    ratingsTotal: 200,
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Burger Joint',
    location: { lat: 49.2828, lng: -123.121 },
    imageUrls: [
      'https://example.com/images/burger-joint-1.jpg',
      'https://example.com/images/burger-joint-2.jpg',
    ],
    rating: 4.2,
    ratingsTotal: 150,
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Pizza Parlor',
    location: { lat: 49.2829, lng: -123.1215 },
    imageUrls: [
      'https://example.com/images/pizza-parlor-1.jpg',
      'https://example.com/images/pizza-parlor-2.jpg',
    ],
    rating: 4.8,
    ratingsTotal: 250,
    isFavorite: true,
  },
  {
    id: '4',
    name: 'Pasta House',
    location: { lat: 49.283, lng: -123.122 },
    imageUrls: [
      'https://example.com/images/pasta-house-1.jpg',
      'https://example.com/images/pasta-house-2.jpg',
    ],
    rating: 4.6,
    ratingsTotal: 180,
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Steak Grill',
    location: { lat: 49.2831, lng: -123.1225 },
    imageUrls: [
      'https://example.com/images/steak-grill-1.jpg',
      'https://example.com/images/steak-grill-2.jpg',
    ],
    rating: 4.7,
    ratingsTotal: 220,
    isFavorite: true,
  },
]

const meta = {
  title: 'Components/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const TabComponent: Story = {
  args: {
    restaurants: mockRestaurants,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const listButton = canvas.getByLabelText(/list view button/i)

    const mapButton = canvas.getByLabelText(/map view button/i)
    const listTab = canvas.getByTestId('list-tab')
    await expect(listButton).toBeInTheDocument()
    await expect(mapButton).toBeInTheDocument()

    // List Tab is the default
    await expect(listTab).toBeInTheDocument()

    // Map Tap appears after clicking map button
    await userEvent.click(mapButton)
    await expect(listTab).toHaveAttribute('data-state', 'inactive')

    // List Tab appears again after clicking list button
    await userEvent.click(listButton)
    await expect(listTab).toBeInTheDocument()
  },
}
