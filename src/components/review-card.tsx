'use client'
import { StarIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface ReviewCard {
  profileUrl: string
  authorName: string
  rating: number
  comment: string
  time: string
}

export function ReviewCard({
  profileUrl,
  authorName,
  rating,
  comment,
  time,
}: ReviewCard) {
  const firstInitialOfAuthorName = authorName.substring(0, 1)
  return (
    <div className="mb-3 p-2">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src={profileUrl} alt={authorName} />
          <AvatarFallback>{firstInitialOfAuthorName}</AvatarFallback>
        </Avatar>
        <div>
          <h5 className="scroll-m-20 text-lg tracking-tight">{authorName}</h5>
          <div className="flex">
            <div className="mr-4 flex items-center gap-1">
              <StarIcon />
              <h5 className="scroll-m-20 text-xs tracking-tight">{rating}</h5>
            </div>
            <p className="text-xs">{time}</p>
          </div>
        </div>
      </div>
      <p className="leading-7">{comment}</p>
    </div>
  )
}
