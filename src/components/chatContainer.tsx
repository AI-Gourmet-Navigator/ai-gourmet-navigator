'use client'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { type ChatOb } from './chat'

export function ChatContainer({ type, role, content }: ChatOb) {
  return (
    <>
      <div className="w-full sm:px-4 md:px-8 lg:px-20">
        {role === 'app' ? (
          <div className="mb-10 flex w-full items-end">
            <Avatar className="mr-3 h-7 w-7 sm:h-12 sm:w-12">
              <AvatarImage src="https://loremflickr.com/640/360" alt="host" />
              <AvatarFallback>Host</AvatarFallback>
            </Avatar>

            <div className="mr-10 flex min-h-12 max-w-96 flex-col items-center justify-center rounded-t-lg rounded-br-lg bg-red-200 px-4 py-2">
              {content}
            </div>
          </div>
        ) : (
          <></>
        )}
        {role === 'user' ? (
          <div className="mb-10 flex w-full items-end justify-end">
            <div className="ml-10 flex min-h-12 max-w-96 flex-col items-center justify-center rounded-t-lg rounded-bl-lg bg-red-200 px-4 py-2">
              {content}
            </div>
            <Avatar className="ml-3 h-7 w-7 sm:h-12 sm:w-12">
              <AvatarImage src="https://loremflickr.com/640/360" alt="host" />
              <AvatarFallback>Host</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
