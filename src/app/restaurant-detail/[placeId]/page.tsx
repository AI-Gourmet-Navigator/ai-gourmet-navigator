import { MOCK_RESTAURANT_DETAILS } from './mock'
import { Detail } from '@/components/detail'

export default function RestaurantDetail({
  params,
}: {
  params: { placeId: string }
}) {
  const placeId = params.placeId
  return (
    <>
      <Detail isFavorite restaurant={MOCK_RESTAURANT_DETAILS} />
    </>
  )
}
