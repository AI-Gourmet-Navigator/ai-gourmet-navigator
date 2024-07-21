import { useOptimistic, useRef } from 'react'
import { Button } from './ui/button'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

export function FavoriteButton({
  isFavorite,
  placeId,
}: {
  isFavorite: boolean
  placeId: string
}) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  async function formAction(formData: FormData) {
    addOptimisticFavorite(!isFavorite)
    formRef.current?.reset()
    const placeId = formData.get('placeId')
    await fetch(`/api/favorite`, {
      method: 'POST',
      body: JSON.stringify({ placeId }),
    })
    router.refresh()
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
