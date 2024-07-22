'use client'
import { type MessageOb } from '@/constants/questionList'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { USER_ROLE } from '@/constants/userRole'

export function ChatContainer({ role, content }: MessageOb) {
  return (
    <>
      <div className="w-full sm:px-4 md:px-8 lg:px-20">
        {role === USER_ROLE.app ? (
          <div className="mb-6 flex w-full items-end">
            <Avatar className="mr-3 h-7 w-7 sm:h-12 sm:w-12">
              <AvatarImage src="https://loremflickr.com/640/360" alt="Host" />
              <AvatarFallback className="text-xs sm:text-sm">
                App
              </AvatarFallback>
            </Avatar>

            <div className="mr-10 flex min-h-12 max-w-96 flex-col items-center justify-center rounded-t-lg rounded-br-lg bg-secondary px-4 py-2">
              {content}
            </div>
          </div>
        ) : (
          <></>
        )}
        {role === USER_ROLE.user ? (
          <div className="mb-6 flex w-full items-end justify-end">
            <div className="ml-10 flex min-h-12 max-w-96 flex-col items-center justify-center rounded-t-lg rounded-bl-lg bg-primary-opacity px-4 py-2">
              {content}
            </div>
            <Avatar className="ml-3 h-7 w-7 sm:h-12 sm:w-12">
              <AvatarImage src="https://loremflickr.com/640/360" alt="User" />
              <AvatarFallback className="text-xs sm:text-sm">
                User
              </AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
