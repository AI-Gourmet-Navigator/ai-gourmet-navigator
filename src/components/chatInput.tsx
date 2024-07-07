'use client'
import { type ChatOb } from './chat'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useRef } from 'react'

type ChatInputProps = {
  onSubmit: (message: ChatOb) => void
}

export function ChatInput({ onSubmit }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = textareaRef.current?.value

    if (value) {
      onSubmit({
        type: 'response',
        role: 'user',
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
        onSubmit={handleSubmit}
        className="flex w-full items-end gap-1.5 sm:gap-4"
      >
        <Textarea
          ref={textareaRef}
          className="max-h-52 resize-none px-3 py-2 sm:ml-4 md:ml-8 lg:ml-20"
          style={{ height: '40px', overflowY: 'hidden' }}
        />
        <Button className="px-3 sm:mr-4 sm:px-4 md:mr-8 lg:mr-20" type="submit">
          <PaperPlaneIcon />
        </Button>
      </form>
    </>
  )
}
