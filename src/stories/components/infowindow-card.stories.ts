import type { Meta, StoryObj } from "@storybook/react";
import { InfoWindowCard } from "@/components/infowindow-card";

const meta = {
  title: "Components/InfoWindowCard",
  component: InfoWindowCard,
} satisfies Meta<typeof InfoWindowCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Favorite: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrl: `https://loremflickr.com/640/360`,
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: true,
  },
};

export const NotFavorite: Story = {
  args: {
    name: "Farmer's Apprentice Restaurant",
    imageUrl: `https://loremflickr.com/640/360`,
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: false,
  },
};
