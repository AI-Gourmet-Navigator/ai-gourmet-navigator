import { env } from '@/env'
import { getServerAuthSession } from '@/server/auth'

export default async function Favorite() {
  const session = await getServerAuthSession()
  const data = await fetch(
    `${env.APP_URL}/api/favorite/all?userId=${session?.user.id}`,
  )
  const favorites = (await data.json()) as string[]
  console.log({ favorites })
  return <h1>Favorites</h1>
}
