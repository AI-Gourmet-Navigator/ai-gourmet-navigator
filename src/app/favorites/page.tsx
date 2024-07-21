import { env } from '@/env'
import { getServerAuthSession } from '@/server/auth'
import { Tab, type Restaurant } from '@/components/tab'

export default async function Favorites() {
  const session = await getServerAuthSession()
  const data = await fetch(
    `${env.APP_URL}/api/favorite/all?userId=${session?.user.id}`,
  )
  const favorites = (await data.json()) as Restaurant[]
  return <Tab restaurants={favorites} />
}
