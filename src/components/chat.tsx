'use client'
import { useState } from 'react'
import { ChatContainer } from './chatContainer'
import { ChatInput } from './chatInput'
import { USER_ROLE } from '@/app/result/constants'

export interface MessageOb {
  type: string
  role: string
  content: string
}

const questionList: MessageOb[] = [
  {
    type: 'genre',
    role: USER_ROLE.app,
    content: 'What type of cuisine or genre of food are you craving for?',
  },
  {
    type: 'atmosphere',
    role: USER_ROLE.app,
    content: 'Can you describe the atmosphere or ambiance of the restaurant?',
  },
  {
    type: 'rate',
    role: USER_ROLE.app,
    content: 'What rating should the restaurant have to be ideal?',
  },
  {
    type: 'numberOfRatings',
    role: USER_ROLE.app,
    content:
      'How many customer reviews should the restaurant have to be ideal?',
  },
  {
    type: 'placeLevel',
    role: USER_ROLE.app,
    content:
      'What is the place level of the restaurant on a scale from 1 to 5?',
  },
  // {
  //   type:"location",
  //   content:
  //     'Can you describe the atmosphere or ambiance of the restaurant?',
  // },
]

export function Chat() {
  const initialChat: MessageOb = {
    type: 'genre',
    role: USER_ROLE.app,
    content: 'What type of cuisine or genre of food are you craving for?',
  }
  const [chats, setChats] = useState<MessageOb[]>([
    questionList[0] ?? initialChat,
  ])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showInput, setShowInput] = useState(true)

  const handleSubmit = async (message: MessageOb) => {
    const currentQuestion = questionList[currentQuestionIndex]
    if (!currentQuestion) return
    const answer: MessageOb = {
      type: currentQuestion.type,
      role: USER_ROLE.user,
      content: message.content,
    }
    setChats((prev) => [...prev, answer])

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
      {showInput && (
        <ChatInput
          onSubmit={handleSubmit}
          currentQuestionType={currentQuestionType}
        />
      )}
    </>
  )
}
