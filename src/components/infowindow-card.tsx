import { Card, CardContent, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'
import { HeartIcon, HeartFilledIcon, StarIcon } from '@radix-ui/react-icons'

interface InfoWindowCard {
  name: string
  imageUrl: string
  rating: number
  ratingsTotal: number
  isFavorite: boolean
}

export function InfoWindowCard({
  name,
  imageUrl,
  rating,
  ratingsTotal,
  isFavorite,
}: InfoWindowCard) {
  return (
    <Card className="w-80">
      <Image
        className="w-full rounded-t-lg pb-4"
        src={imageUrl}
        width={384}
        height={100}
        alt={`${name}-image`}
      />
      <CardContent>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Button variant="ghost">
            {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
          </Button>
        </div>
        <div className="flex items-center">
          <StarIcon />
          <CardDescription>{`${rating} (${ratingsTotal})`}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
