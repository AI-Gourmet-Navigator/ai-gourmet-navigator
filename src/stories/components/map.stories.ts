import type { Meta, StoryObj } from '@storybook/react'
import { Map } from '@/components/map'
import { MOCK_RESTAURANTS } from '../mocks/restaurants'

const meta = {
  title: 'Components/Map',
  component: Map,
  args: {
    restaurants: MOCK_RESTAURANTS,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Map>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
