import type { StorybookConfig } from "@storybook/nextjs";
import { env } from "../src/env";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_GOOGLE_MAP_API: env.NEXT_PUBLIC_GOOGLE_MAP_API,
  }),
};
export default config;
