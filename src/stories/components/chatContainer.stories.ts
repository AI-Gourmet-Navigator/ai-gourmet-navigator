import type { Meta, StoryObj } from '@storybook/react'
import { ChatContainer } from '@/components/chatContainer'

const meta = {
  title: 'Components/ChatContainer',
  component: ChatContainer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    type: 'genre',
    role: 'app',
    content: 'What type of cuisine or genre of food are you craving for?',
  },
  argTypes: {
    type: { control: 'text' },
    role: { control: 'text' },
    content: { control: 'text' },
  },
} satisfies Meta<typeof ChatContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'genre',
    role: 'app',
    content: 'What type of cuisine or genre of food are you craving for?',
  },
}

export const User: Story = {
  args: {
    type: 'genre',
    role: 'user',
    content: 'Sushi',
  },
}
