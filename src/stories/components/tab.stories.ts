import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Tab } from '@/components/tab'
import { MOCK_RESTAURANTS } from '../mocks/restaurants'
const meta = {
  title: 'Components/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const TabComponent: Story = {
  args: {
    restaurants: MOCK_RESTAURANTS,
  },
  parameters: {
    nextjs: {
      router: {
        query: '',
      },
    },
  },
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

export const TabWithMap: Story = {
  args: {
    restaurants: MOCK_RESTAURANTS,
  },
  parameters: {
    nextjs: {
      router: {
        query: {
          tab: 'map',
        },
      },
    },
  },
}
