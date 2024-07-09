import { Chat } from '@/components/chat'
import { type Restaurants } from './api/preference/route'

export default async function Home() {
  const searchRestaurantPreference = async (): Promise<Restaurants[]> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/preference/route`,
      )
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await res.json()
    } catch (error) {
      console.error('Error fetching restaurant preferences:', error)
      return []
    }
  }

  const data = await searchRestaurantPreference()

  console.log(data)

  return (
    <div className="container relative flex flex-col items-center justify-center gap-2 px-4">
      <Chat />
    </div>
  )
}
