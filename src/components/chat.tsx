'use client'
import { useState } from 'react'
import { ChatContainer } from './chatContainer'
import { ChatInput } from './chatInput'
import { Button } from './ui/button'
import { type SchemaKeys, schemas } from '@/constants/validation'
import {
  initialChat,
  questionList,
  type UserAnswer,
  type MessageOb,
} from '@/constants/questionList'
import { USER_ROLE } from '@/constants/userRole'

function isSchemaKey(key: string): key is SchemaKeys {
  return key in schemas
}

export function Chat() {
  const [chats, setChats] = useState<MessageOb[]>([
    questionList[0] ?? initialChat,
  ])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [showInput, setShowInput] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({})

  const handleSubmit = (message: MessageOb) => {
    const currentQuestion = questionList[currentQuestionIndex]
    if (!currentQuestion) return

    if (!isSchemaKey(currentQuestion.type)) {
      setErrorMessage('Invalid question type')
      return
    }

    const schema = schemas[currentQuestion.type]
    const result = schema.safeParse(message.content)

    if (!result.success) {
      const error = result.error.errors[0]
      if (error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Invalid input')
      }
      return
    }

    const answer: MessageOb = {
      type: currentQuestion.type,
      role: USER_ROLE.user,
      content: message.content,
    }
    setChats((prev) => [...prev, answer])
    setUserAnswer((prev) => ({
      ...prev,
      [currentQuestion.type]: message.content,
    }))
    setErrorMessage(null)

    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questionList.length) {
      const nextQuestion = questionList[nextQuestionIndex]
      if (nextQuestion) {
        setChats((prev) => [...prev, nextQuestion])
        setCurrentQuestionIndex(nextQuestionIndex)
      } else setShowInput(false)
    } else {
      setShowInput(false)
    }
  }

  const currentQuestionType = questionList[currentQuestionIndex]?.type ?? ''

  const handleSearchRestaurantPreference = async () => {
    try {
      const res = await fetch(`/api/preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genre: userAnswer.genre ?? '',
          atmosphere: userAnswer.atmosphere ?? '',
          rate: userAnswer.rate ? parseInt(userAnswer.rate) : 0,
          numberOfRatings: userAnswer.numberOfRatings
            ? parseInt(userAnswer.numberOfRatings)
            : 0,
          placeLevel: userAnswer.placeLevel
            ? parseInt(userAnswer.placeLevel)
            : 0,
          location: 'Vancouver',
        }),
      })
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await res.json()
      console.log(data, 'result')
    } catch (error) {
      console.error('Error fetching restaurant preferences:', error)
      return []
    }
  }

  return (
    <>
      {chats.slice(0, chats.length).map((chat, index) => {
        return (
          <ChatContainer
            role={chat.role}
            type={chat.type}
            content={chat.content}
            key={index}
          />
        )
      })}
      <div className="w-full">
        {showInput && (
          <ChatInput
            onSubmit={handleSubmit}
            currentQuestionType={currentQuestionType}
          />
        )}
        {!showInput && (
          <Button onClick={handleSearchRestaurantPreference}>Search</Button>
        )}
        {errorMessage && (
          <div className="mt-2 flex w-full justify-center">{errorMessage}</div>
        )}
      </div>
    </>
  )
}
