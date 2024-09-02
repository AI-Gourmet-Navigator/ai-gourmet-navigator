import React from 'react'
import '../src/styles/globals.css'
import type { Preview } from '@storybook/react'
import { MockSessionProvider } from './mock-session-provider'

import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story, { parameters }) => {
      const { session } = parameters
      return (
        <MockSessionProvider session={session}>
          <Story />
        </MockSessionProvider>
      )
    },
  ],
}

export default preview
