import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@/components/list'

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const ListComponent: Story = {}
