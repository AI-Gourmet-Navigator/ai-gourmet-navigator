import type { Meta, StoryObj } from '@storybook/react'
import Result from '@/app/result/page'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Pages/Result',
  component: Result,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Result>

export default meta
type Story = StoryObj<typeof meta>

export const ResultPage: Story = {
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
