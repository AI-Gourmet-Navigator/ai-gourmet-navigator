import type { Meta, StoryObj } from '@storybook/react'
import { ImageCarousel } from '@/components/imageCarousel'

const meta: Meta<typeof ImageCarousel> = {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
}

export default meta

type Story = StoryObj<typeof meta>

export const NoPhotos: Story = {
  args: {
    photos: [],
  },
}

export const OnePhoto: Story = {
  args: {
    photos: ['https://loremflickr.com/640/360'],
  },
}

export const TwoPhotos: Story = {
  args: {
    photos: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
}

export const MultiplePhotos: Story = {
  args: {
    photos: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
}
