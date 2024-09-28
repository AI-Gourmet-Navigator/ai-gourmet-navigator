'use client'
import Link from 'next/link'
import { StarIcon, SewingPinFilledIcon } from '@radix-ui/react-icons'
import { ImageCarousel } from '@/components/imageCarousel'
import { ReviewCard } from '@/components/review-card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ServiceItem } from '@/components/service-item'
import type { Review } from '@/lib/google-map'
import { getImageUrls } from '@/lib/get-image-urls'
import type { DetailedRestaurant } from '@/app/api/restaurant/id/route'
import { FavoriteButton } from './favorite-button'
import { useSession } from 'next-auth/react'

interface DetailProps {
  restaurant: DetailedRestaurant
}

export function Detail({ restaurant }: DetailProps) {
  const { status } = useSession()
  const {
    place_id,
    name,
    rating,
    user_ratings_total,
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
    isFavorite,
  } = restaurant

  const topThreeReviews = reviews?.slice(0, 3)
  const scrollableReviews: Review[] = Array.from(reviews || [])

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <ImageCarousel photos={getImageUrls(photos)} />
      </div>
      <div className="px-3 pb-8 sm:px-6">
        <div className="flex justify-between">
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <h2 className="scroll-m-20 pb-4 text-3xl tracking-tight first:mt-0">
              {name}
            </h2>
          </Link>
          {status === 'authenticated' && isFavorite !== undefined && (
            <FavoriteButton isFavorite={isFavorite} placeId={place_id} />
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="mr-4 flex items-center gap-1">
            <StarIcon />
            <p className="leading-7">{rating}</p>
            <p className="leading-7">•</p>
            <p className="leading-7">{user_ratings_total} reviews</p>
          </div>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1">
              <SewingPinFilledIcon />
              <p className="leading-7">{formatted_address}</p>
            </div>
          </Link>
        </div>

        <hr className="mt-6" />
        <h3 className="mt-4 scroll-m-20 text-2xl tracking-tight">
          What this place offers
        </h3>
        <ServiceItem
          takeout={takeout}
          delivery={delivery}
          dine_in={dine_in}
          serves_vegetarian_food={serves_vegetarian_food}
          wheelchair_accessible_entrance={wheelchair_accessible_entrance}
          reservable={reservable}
          price_level={price_level}
          opening_hours={opening_hours}
        />

        <hr className="mt-6" />
        <h3 className="my-4 scroll-m-20 text-2xl tracking-tight">Schedule</h3>
        <ul>
          {opening_hours.weekday_text.map((day) => (
            <li className="pl-2 leading-7" key={day}>
              • {day}
            </li>
          ))}
        </ul>

        <hr className="mt-6" />
        <h3 className="my-4 scroll-m-20 text-2xl tracking-tight">Reviews</h3>
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
