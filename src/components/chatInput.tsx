'use client'

import { USER_ROLE } from '@/constants/userRole'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useRef } from 'react'
import { type MessageOb } from '@/constants/questionList'

interface ChatInputProps {
  onSubmit: (message: MessageOb) => void
  currentQuestionType: string
}

export function ChatInput({ onSubmit, currentQuestionType }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = textareaRef.current?.value

    if (value) {
      onSubmit({
        type: currentQuestionType,
        role: USER_ROLE.user,
        content: value,
      })

      textareaRef.current.value = ''
    }
  }

  return (
    <>
      <form
        onKeyDown={(event: React.KeyboardEvent<HTMLFormElement>) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            handleSubmit(event)
            event.preventDefault()
          }
        }}
        onSubmit={(event: React.KeyboardEvent<HTMLFormElement>) => {
          handleSubmit(event)
          event.preventDefault()
        }}
        className="flex w-full items-end gap-1.5 sm:gap-4"
      >
        <Textarea
          ref={textareaRef}
          className="max-h-52 resize-none px-3 py-[7px] sm:ml-4 md:ml-8 lg:ml-20"
        />
        <Button
          className="px-3 sm:mr-4 sm:px-4 md:mr-8 lg:mr-20"
          aria-label="submit"
          type="submit"
        >
          <PaperPlaneIcon />
        </Button>
      </form>
    </>
  )
}
