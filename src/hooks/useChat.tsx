import { useState, useCallback } from 'react'
import { type SchemaKeys, schemas } from '@/constants/validation'
import {
  initialChat,
  questionList,
  type UserAnswer,
  type MessageOb,
} from '@/constants/questionList'
import { USER_ROLE } from '@/constants/userRole'
import { useRouter } from 'next/navigation'
import { useSearchResultStore } from '@/store/searchResultStore'
import { fetchRestaurantPreferences } from '@/lib/fetchRestaurantPreferences'

function isSchemaKey(key: string): key is SchemaKeys {
  return key in schemas
}

export function useChat() {
  const router = useRouter()
  const [chats, setChats] = useState<MessageOb[]>([
    questionList[0] ?? initialChat,
  ])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [showInput, setShowInput] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({})
  const [loading, setLoading] = useState<boolean>(false)
  const setRestaurants = useSearchResultStore((state) => state.setRestaurants)

  const handleSubmit = useCallback(
    (message: MessageOb) => {
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
        setErrorMessage(error ? error.message : 'Invalid input')
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
        }
      } else {
        setShowInput(false)
      }
    },
    [currentQuestionIndex],
  )

  const handleSearchRestaurantPreference = async () => {
    setLoading(true)
    try {
      const data = await fetchRestaurantPreferences(userAnswer)
      setRestaurants(data)
      router.push('/result')
    } catch (error) {
      console.error('Error fetching restaurant preferences:', error)
      setErrorMessage('Failed to fetch restaurant preferences')
    } finally {
      setLoading(false)
    }
  }

  return {
    chats,
    showInput,
    errorMessage,
    loading,
    currentQuestionType: questionList[currentQuestionIndex]?.type ?? '',
    handleSubmit,
    handleSearchRestaurantPreference,
  }
}
