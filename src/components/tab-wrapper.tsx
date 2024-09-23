'use client'

import { useState, useEffect } from 'react'
import { Tab } from '@/components/tab'
import { useUserPreferenceStore } from '@/store/userPreferenceStore'
import { searchRestaurantsByUserAnswer } from '@/lib/fetchRestaurantPreferences'
import Loading from '@/app/loading'
import { useRecommendedRestaurantListStore } from '@/store/recommendedRestaurantList'

export function Wrapper() {
  const userPreference = useUserPreferenceStore((state) => state.userPreference)
  const [loading, setLoading] = useState<boolean>(false)

  const { recommendedRestaurantList, setRecommendedRestaurantList } =
    useRecommendedRestaurantListStore()

  useEffect(() => {
    setLoading(true)
    const searchRecommendedRestaurants = async () => {
      try {
        if (!userPreference) {
          return
        }
        const data = await searchRestaurantsByUserAnswer(userPreference)
        setRecommendedRestaurantList(data)
      } catch (error) {
        console.error('Failed to fetch preferences:', error)
        throw Error('Failed to fetch preferences')
      } finally {
        setLoading(false)
      }
    }
    void searchRecommendedRestaurants()
  }, [userPreference, setRecommendedRestaurantList])

  const ResultContent = () =>
    !recommendedRestaurantList || recommendedRestaurantList.length === 0 ? (
      <p>No restaurant hit :/ Please try another search!</p>
    ) : (
      <Tab restaurants={recommendedRestaurantList} />
    )
  return <>{loading ? <Loading /> : <ResultContent />}</>
}
