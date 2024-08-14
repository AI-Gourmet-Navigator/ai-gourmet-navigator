import { db } from '@/server/db'

export async function checkIsFavorite({
  placeId,
  userId,
}: {
  placeId: string
  userId: string
}) {
  const favorite = await db.favorite.findFirst({
    where: {
      placeId,
      userId,
    },
  })
  return !!favorite
}
