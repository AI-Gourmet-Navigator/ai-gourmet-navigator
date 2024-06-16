import { ImageCarousel } from '@/components/imageCarousel'
import React from 'react'
import { MOCK_RESTAURANT_DETAILS } from './mock'
import { StarIcon, SewingPinFilledIcon, ClockIcon } from '@radix-ui/react-icons'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { icons } from './constants'
import Link from 'next/link'
import { ReviewCard } from '@/components/review-card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Review {
  profile_photo_url: string
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

export default function RestaurantDetail({
  params,
}: {
  params: { placeId: string }
}) {
  const {
    id,
    name,
    location,
    rating,
    ratingsTotal,
    isFavorite,
    url,
    website,
    formatted_address,
    serves_vegetarian_food,
    takeout,
    delivery,
    dine_in,
    wheelchair_accessible_entrance,
    reservable,
    price_level,
    opening_hours,
    photos,
    reviews,
  } = MOCK_RESTAURANT_DETAILS

  const topThreeReviews = reviews.slice(0, 3)
  const scrollableReviews: Review[] = Array.from(reviews)

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <ImageCarousel />
      </div>
      <div className="px-6">
        <Link href={website} target="_blank" rel="noopener noreferrer">
          <h2 className="scroll-m-20 pb-4 text-3xl tracking-tight first:mt-0">
            {name}
          </h2>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="mr-4 flex items-center gap-1">
            <StarIcon />
            <h5 className="scroll-m-20 text-lg tracking-tight">{rating}</h5>
            <p className="leading-7">•</p>
            <p className="leading-7">{ratingsTotal} reviews</p>
          </div>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1">
              <SewingPinFilledIcon />
              <p className="leading-7">{formatted_address}</p>
            </div>
          </Link>
        </div>
        <div className="my-6 mt-4 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-3">
          {icons.map((icon) => (
            <Card
              className="flex flex-col items-center justify-center py-2"
              key={icon.name}
            >
              <div className="flex flex-col flex-wrap items-center gap-1 sm:flex-row">
                <Image
                  src={icon.imageUrl}
                  width={25}
                  height={25}
                  alt={icon.name}
                />
                <p className="text-sm leading-7">{icon.name}</p>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-6 w-6" />
            <p>Schedule</p>
          </div>
          {opening_hours.weekday_text.map((day) => (
            <p className="leading-7" key={day}>
              {day}
            </p>
          ))}
        </div>
        <p className="leading-7">{serves_vegetarian_food}</p>
        <p className="leading-7">{takeout}</p>
        <p className="leading-7">{delivery}</p>
        <p className="leading-7">{dine_in}</p>
        <p className="leading-7">{wheelchair_accessible_entrance}</p>
        <p className="leading-7">{reservable}</p>
        <p className="leading-7">{dine_in}</p>
        <p className="leading-7">{wheelchair_accessible_entrance}</p>
        {/* <div>hello: {params.placeId}</div> */}

        {topThreeReviews.map((eachRating, index) => (
          <ReviewCard
            profileUrl={eachRating.profile_photo_url}
            authorName={eachRating.author_name}
            rating={eachRating.rating}
            comment={eachRating.text}
            time={eachRating.relative_time_description}
            key={index}
          />
        ))}
        <Dialog>
          <div className="flex w-full justify-center">
            <DialogTrigger asChild>
              <Button variant="outline">All Reviews</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="h-[75%] max-w-[90%]">
            <DialogHeader>
              <h5 className="scroll-m-20 text-lg tracking-tight">Reviews</h5>
            </DialogHeader>
            <ScrollArea>
              {scrollableReviews.map((eachRating, index) => (
                <ReviewCard
                  profileUrl={eachRating.profile_photo_url}
                  authorName={eachRating.author_name}
                  rating={eachRating.rating}
                  comment={eachRating.text}
                  time={eachRating.relative_time_description}
                  key={index}
                />
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
