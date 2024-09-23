import { env } from '@/env'
import { getServerAuthSession } from '@/server/auth'
import { Tab } from '@/components/tab'
import type { ModifiedRestaurant } from '../api/preference/route'

export default async function Favorites() {
  const session = await getServerAuthSession()
  const data = await fetch(
    `${env.APP_URL}/api/favorite/all${session?.user.id ? `?userId=${session?.user.id}` : ''}`,
  )
  if (data.status !== 200) {
    throw Error('favorite fetch failed')
  }
  const favorites = (await data.json()) as ModifiedRestaurant[]
  return (
    <>
      {favorites?.length === 0 ? (
        <p className="mt-10 w-full text-center">
          No favorites stored yet. Please search restaurants and save whatever
          you like!
        </p>
      ) : (
        <Tab restaurants={favorites} />
      )}
    </>
  )
}
