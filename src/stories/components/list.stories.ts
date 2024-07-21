import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@/components/list'
import { MOCK_RESTAURANTS } from '../mocks/restaurants'

const meta = {
  title: 'Components/List',
  component: List,
  args: {
    restaurants: MOCK_RESTAURANTS,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const ListComponent: Story = {}
