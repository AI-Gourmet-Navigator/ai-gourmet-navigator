'use client'

import { useEffect, useRef } from 'react'
import { ChatContainer } from './chatContainer'
import { ChatInput } from './chatInput'
import { Button } from './ui/button'
import { useChat } from '@/hooks/useChat'

export function Chat() {
  const {
    chats,
    showInput,
    errorMessage,
    currentQuestionType,
    handleSubmit,
    handleStoreUserPreference,
  } = useChat()

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats])

  return (
    <>
      <div className="pb-12" style={{ minHeight: 'calc(100vh - 124px)' }}>
        {chats.map((chat, index) => (
          <ChatContainer
            role={chat.role}
            type={chat.type}
            content={chat.content}
            key={index}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="absolute bottom-0 left-1/2 mb-4 w-full -translate-x-1/2 transform px-4">
        {showInput && (
          <ChatInput
            onSubmit={handleSubmit}
            currentQuestionType={currentQuestionType}
          />
        )}
        <div className="flex justify-center ">
          {!showInput && (
            <Button onClick={handleStoreUserPreference}>Search</Button>
          )}
        </div>
        {errorMessage && (
          <div className="ext-blue-200 mt-2 flex w-full  text-sm text-primary sm:justify-center">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  )
}
