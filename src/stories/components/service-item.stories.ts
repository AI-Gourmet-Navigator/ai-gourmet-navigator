import type { Meta, StoryObj } from '@storybook/react'
import { ServiceItem } from '@/components/service-item'

const meta: Meta<typeof ServiceItem> = {
  title: 'Components/ServiceItem',
  component: ServiceItem,
  args: {
    takeout: true,
    delivery: true,
    dine_in: true,
    serves_vegetarian_food: true,
    wheelchair_accessible_entrance: true,
    reservable: true,
    price_level: 2,
    opening_hours: {
      open_now: true,
      weekday_text: [
        'Monday: 11:00 AM – 12:45 AM',
        'Tuesday: 11:00 AM – 12:45 AM',
        'Wednesday: 11:00 AM – 12:45 AM',
        'Thursday: 11:00 AM – 12:45 AM',
        'Friday: 11:00 AM – 12:45 AM',
        'Saturday: 11:00 AM – 12:45 AM',
        'Sunday: 11:00 AM – 11:45 PM',
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Closed: Story = {
  args: {
    opening_hours: {
      open_now: false,
      weekday_text: [
        'Monday: 11:00 AM – 12:45 AM',
        'Tuesday: 11:00 AM – 12:45 AM',
        'Wednesday: 11:00 AM – 12:45 AM',
        'Thursday: 11:00 AM – 12:45 AM',
        'Friday: 11:00 AM – 12:45 AM',
        'Saturday: 11:00 AM – 12:45 AM',
        'Sunday: 11:00 AM – 11:45 PM',
      ],
    },
  },
}

export const LimitedServices: Story = {
  args: {
    takeout: false,
    delivery: false,
    dine_in: true,
    serves_vegetarian_food: false,
    wheelchair_accessible_entrance: false,
    reservable: true,
  },
}
