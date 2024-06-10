import type { Meta, StoryObj } from '@storybook/react'
import { Map } from '@/components/map'

const meta = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Map>

export default meta

type Story = StoryObj<typeof meta>

export const MapComponent: Story = {}
