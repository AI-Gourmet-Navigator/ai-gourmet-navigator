'use client'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { MOCK_RESTAURANT_DETAILS } from '@/app/restaurant-detail/[placeId]/mock'
import Image from 'next/image'

export function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const photos = MOCK_RESTAURANT_DETAILS.photos

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative w-full">
      <Carousel setApi={setApi} className="relative w-full">
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="w-full sm:w-1/2">
              <Card>
                <div className="flex items-center justify-center">
                  <Image
                    src={photo.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="h-[320px] w-[640px] object-cover"
                    sizes="100vw"
                    width={0}
                    height={0}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 transform" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </div>
  )
}
