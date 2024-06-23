import { Tab } from '../../components/tab'
import { type Restaurants } from '../api/preference/route'
import { env } from '@/env'
export default async function Result() {
  const result = await fetch(`${env.APP_URL}/api/preference/`, {
    method: 'POST',
    body: JSON.stringify({
      genre: 'Italian',
      atmosphere: 'Casual',
      rate: 4,
      numberOfRatings: 120,
      placeLevel: 3,
      location: 'Vancouver',
    }),
  })

  const data = (await result.json()) as Restaurants
  console.log({ data })
  return (
    <main>
      <Tab />
    </main>
  )
}
