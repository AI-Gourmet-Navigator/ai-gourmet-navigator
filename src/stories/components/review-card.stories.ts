import type { Meta, StoryObj } from '@storybook/react'
import { ReviewCard } from '@/components/review-card'

const meta = {
  title: 'Components/ReviewCard',
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    profileUrl: 'https://loremflickr.com/360/360',
    authorName: 'John Doe',
    rating: 5,
    comment: 'This is a sample review comment.',
    time: '2 days ago',
  },
}
