import { env } from '@/env'
import { Detail } from '@/components/detail'
import { getServerAuthSession } from '@/server/auth'

import { type DetailedRestaurant } from '@/app/api/restaurant/id/route'
export default async function RestaurantDetail({
  params,
}: {
  params: { placeId: string }
}) {
  const placeId = params.placeId
  const session = await getServerAuthSession()

  const response = await fetch(
    `${env.APP_URL}/api/restaurant/id?placeId=${placeId}&userId=${session?.user.id}`,
    { cache: 'no-store' },
  )

  const data = (await response.json()) as DetailedRestaurant

  return (
    <>
      <Detail restaurant={data} />
    </>
  )
}
