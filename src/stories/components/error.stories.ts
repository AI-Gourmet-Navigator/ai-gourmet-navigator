import type { Meta, StoryObj } from '@storybook/react'
import Error from '@/app/error'

const meta: Meta<typeof Error> = {
  title: 'Pages/Error',
  component: Error,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
