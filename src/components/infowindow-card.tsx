import { Card, CardContent, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'
import { HeartIcon, HeartFilledIcon, StarIcon } from '@radix-ui/react-icons'
import { ImageCarousel } from './imageCarousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface InfoWindowCard {
  name: string
  imageUrls: string[]
  rating: number
  ratingsTotal: number
  isFavorite: boolean
}

export function InfoWindowCard({
  name,
  imageUrls,
  rating,
  ratingsTotal,
  isFavorite,
}: InfoWindowCard) {
  return (
    <Card className="w-80">
      <Carousel className="w-full">
        <CarouselContent>
          {imageUrls.map((photo) => (
            <CarouselItem key={photo}>
              <div className="flex items-center justify-center">
                <Image
                  className="w-full rounded-t-lg pb-4"
                  src={photo}
                  width={384}
                  height={100}
                  alt={`${name}-image`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 transform" />
      </Carousel>

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
