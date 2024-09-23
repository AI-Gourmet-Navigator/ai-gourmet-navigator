import Image from 'next/image'
import { icons } from '@/app/restaurant-detail/[placeId]/constants'

interface ServiceItem {
  takeout: boolean
  delivery: boolean
  dine_in: boolean
  serves_vegetarian_food: boolean
  wheelchair_accessible_entrance: boolean
  reservable: boolean
  price_level: number
  opening_hours: { open_now: boolean; weekday_text: string[] }
}

export function ServiceItem({
  takeout,
  delivery,
  dine_in,
  serves_vegetarian_food,
  wheelchair_accessible_entrance,
  reservable,
  price_level,
  opening_hours,
}: ServiceItem) {
  const shouldDisplayIcon = (iconName: string): boolean => {
    switch (iconName) {
      case 'Open now':
        return opening_hours.open_now
      case 'Close now':
        return !opening_hours.open_now
      case 'Price level':
        return true
      case 'Dine in':
        return dine_in
      case 'Take out':
        return takeout
      case 'Delivery':
        return delivery
      case 'Vegetarian':
        return serves_vegetarian_food
      case 'Wheelchair':
        return wheelchair_accessible_entrance
      case 'Reservation':
        return reservable
      default:
        return false
    }
  }
  return (
    <div className="my-4 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-3">
      {icons
        .filter((icon) => shouldDisplayIcon(icon.name))
        .map((icon) => (
          <div key={icon.name} className="flex items-center">
            <div className="rounded-full bg-white p-1">
              <Image
                src={icon.imageUrl}
                width={25}
                height={25}
                alt={icon.name}
              />
            </div>
            <p className="ml-2 text-sm leading-7">
              {icon.name === 'Price level'
                ? price_level !== undefined
                  ? `Price level: ${price_level}`
                  : 'Price level: -'
                : icon.name}
            </p>
          </div>
        ))}
    </div>
  )
}
