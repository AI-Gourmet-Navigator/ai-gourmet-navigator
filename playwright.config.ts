import { defineConfig } from '@playwright/test'
import { type ChromaticConfig } from '@chromatic-com/playwright'

export default defineConfig<ChromaticConfig>({
  use: {
    // 👇 Sets the option at the project level.
    assetDomains: ['placehold.co', 'loremflickr.com'],
  },
  // Other project configuration options
})
