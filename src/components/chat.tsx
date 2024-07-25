'use client'

import { ChatContainer } from './chatContainer'
import { ChatInput } from './chatInput'
import { Button } from './ui/button'
import Loading from '@/app/loading'
import { useChat } from '@/hooks/useChat'

export function Chat() {
  const {
    chats,
    showInput,
    errorMessage,
    loading,
    currentQuestionType,
    handleSubmit,
    handleSearchRestaurantPreference,
  } = useChat()

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {chats.map((chat, index) => (
            <ChatContainer
              role={chat.role}
              type={chat.type}
              content={chat.content}
              key={index}
            />
          ))}
          <div className="mb-4 w-full">
            {showInput && (
              <ChatInput
                onSubmit={handleSubmit}
                currentQuestionType={currentQuestionType}
              />
            )}
            <div className="flex justify-center ">
              {!showInput && (
                <Button onClick={handleSearchRestaurantPreference}>
                  Search
                </Button>
              )}
            </div>
            {errorMessage && (
              <div className="mt-2 flex w-full justify-center">
                {errorMessage}
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
