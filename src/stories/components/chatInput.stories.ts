import type { Meta, StoryObj } from '@storybook/react'
import { ChatInput } from '@/components/chatInput'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Components/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    currentQuestionType: 'genre',
  },
  argTypes: {
    currentQuestionType: { control: 'text' },
  },
} satisfies Meta<typeof ChatInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentQuestionType: 'general',
    onSubmit: (message) => console.log(message), // Replace with actual function if needed
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submitButton = canvas.getByRole('button', { name: /submit/i }) // Ensure your button has "aria-label='submit'"
    const textarea = canvas.getByRole('textbox')

    // Simulate typing into the textarea
    await userEvent.type(textarea, 'Hello, this is a test message!')
    // Simulate clicking the submit button
    await userEvent.click(submitButton)

    // Optionally, check if the textarea is cleared after submitting
    await expect(textarea).toHaveValue('')
  },
}
