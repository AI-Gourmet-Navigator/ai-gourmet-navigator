import type { StorybookConfig } from '@storybook/nextjs'
import dotenv from 'dotenv'

dotenv.config()

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],

  env: (config) => ({
    ...config,
    DATABASE_URL: process.env.DATABASE_URL || '',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || '',
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID || '',
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET || '',
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API || '',
    G_HUB_ID: process.env.G_HUB_ID || '',
    G_HUB_SECRET: process.env.G_HUB_SECRET || '',
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID || '',
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET || '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    NEXT_PUBLIC_GOOGLE_MAP_API: process.env.NEXT_PUBLIC_GOOGLE_MAP_API || '',
  }),
  features: {
    experimentalRSC: true,
  },
}
export default config
