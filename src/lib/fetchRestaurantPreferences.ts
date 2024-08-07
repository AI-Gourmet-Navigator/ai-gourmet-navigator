import { type Restaurants } from '@/app/api/preference/route'

interface UserAnswer {
  genre?: string
  atmosphere?: string
  rate?: string
  numberOfRatings?: string
  placeLevel?: string
}

export const searchRestaurantsByUserAnswer = async (
  userAnswer: UserAnswer,
): Promise<Restaurants[]> => {
  const res = await fetch('/api/preference', {
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
      placeLevel: userAnswer.placeLevel ? parseInt(userAnswer.placeLevel) : 0,
      location: 'Vancouver',
    }),
  })

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json()
}
