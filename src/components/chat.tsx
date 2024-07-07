'use client'
import { useState } from 'react'
import { ChatContainer } from './chatContainer'
import { ChatInput } from './chatInput'

export interface ChatOb {
  type: string
  role: string
  content: string
}

const questionList: ChatOb[] = [
  {
    type: 'genre',
    role: 'app',
    content: 'What type of cuisine or genre of food are you craving for?',
  },
  {
    type: 'atmosphere',
    role: 'app',
    content: 'Can you describe the atmosphere or ambiance of the restaurant?',
  },
  {
    type: 'rate',
    role: 'app',
    content: 'What rating should the restaurant have to be ideal?',
  },
  {
    type: 'numberOfRatings',
    role: 'app',
    content:
      'How many customer reviews should the restaurant have to be ideal?',
  },
  {
    type: 'placeLevel',
    role: 'app',
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
  const initialChat: ChatOb = {
    type: 'genre',
    role: 'app',
    content: 'What type of cuisine or genre of food are you craving for?',
  }
  const [chats, setChats] = useState<ChatOb[]>([questionList[0] ?? initialChat])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleSubmit = async (message: ChatOb) => {
    setChats((prev) => [...prev, message])

    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questionList.length) {
      const nextQuestion = questionList[nextQuestionIndex]
      if (nextQuestion) {
        setChats((prev) => [...prev, nextQuestion])
        setCurrentQuestionIndex(nextQuestionIndex)
      }
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
      <ChatInput onSubmit={handleSubmit} />
    </>
  )
}
