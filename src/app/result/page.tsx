import { Tab, type Restaurant } from '../../components/tab'
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

  const data = (await result.json()) as Restaurant[]
  return (
    <main>
      <Tab restaurants={data} />
    </main>
  )
}
