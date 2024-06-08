import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "@/components/tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabComponent: Story = {};
