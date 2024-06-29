'use client'
import Image from 'next/image'
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

interface ImageCarousel {
  photos: {
    imageUrl: string
  }[]
}

export function ImageCarousel({ photos }: ImageCarousel) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex w-full flex-col items-center">
      {photos.length === 0 ? (
        <div className="mb-8 flex items-center justify-center">
          <Image
            src={'/icons/no-image.png'}
            width={50}
            height={50}
            alt="No image"
            className="my-8 text-gray-400"
          />
        </div>
      ) : photos.length === 1 ? (
        <div className="mb-8 flex items-center justify-center">
          <Image
            src={photos[0]?.imageUrl ?? '/default-image.png'}
            alt="Slide 1"
            className="h-[320px] w-[640px] object-cover"
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
      ) : (
        <div className="relative w-full">
          <Carousel setApi={setApi} className="relative w-full sm:mb-8">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem
                  key={index}
                  className={`
                ${
                  photos.length === 2
                    ? 'sm:basis-1/2'
                    : 'sm:basis-1/2 lg:basis-1/3'
                }`}
                >
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
          <div className="py-2 text-center text-sm text-muted-foreground sm:hidden">
            {current} / {photos.length}
          </div>
        </div>
      )}
    </div>
  )
}
