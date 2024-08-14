import { useOptimistic, useRef } from 'react'
import { Button } from './ui/button'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import { useRouter, usePathname } from 'next/navigation'
import { useRecommendedRestaurantListStore } from '@/store/recommendedRestaurantList'

export function FavoriteButton({
  isFavorite,
  placeId,
}: {
  isFavorite: boolean
  placeId: string
}) {
  const { toggleIsFavoriteByPlaceId } = useRecommendedRestaurantListStore()
  const router = useRouter()
  const pathname = usePathname()
  const isResultPage = pathname.includes('result')
  const formRef = useRef<HTMLFormElement>(null)
  async function formAction(formData: FormData) {
    addOptimisticFavorite(!isFavorite)
    formRef.current?.reset()
    const placeId = formData.get('placeId')
    await fetch(`/api/favorite`, {
      method: 'POST',
      body: JSON.stringify({ placeId }),
    })
    // We also want to update client side store managed by zustand
    // When users are in the result page
    if (isResultPage && placeId) {
      toggleIsFavoriteByPlaceId(String(placeId))
      // Otherwise, just let this app update data on the server side
    } else {
      router.refresh()
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation()
  }

  const [optimisticIsFavorite, addOptimisticFavorite] = useOptimistic(
    isFavorite,
    (state) => !state,
  )
  return (
    <form action={formAction} ref={formRef}>
      <input type="hidden" value={placeId} name="placeId" />
      <Button variant="ghost" type="submit" onClick={handleClick}>
        {optimisticIsFavorite ? <HeartFilledIcon /> : <HeartIcon />}
      </Button>
    </form>
  )
}
