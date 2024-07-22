import { USER_ROLE } from './userRole'

export interface MessageOb {
  type: string
  role: string
  content: string
}

export const initialChat: MessageOb = {
  type: 'genre',
  role: USER_ROLE.app,
  content: 'What type of cuisine or genre of food are you craving for?',
}

export const questionList: MessageOb[] = [
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
]

export interface UserAnswer {
  genre?: string
  atmosphere?: string
  rate?: string
  numberOfRatings?: string
  placeLevel?: string
  location?: string
}
