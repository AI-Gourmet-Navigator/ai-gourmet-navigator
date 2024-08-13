'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabs, defaultValue } from '../app/result/constants'
import { Map } from './map'
import { List } from './list'
import { useUserPreferenceStore } from '@/store/userPreferenceStore'
import { useEffect, useState } from 'react'
import { searchRestaurantsByUserAnswer } from '@/lib/fetchRestaurantPreferences'
import type { ModifiedRestaurant } from '@/app/api/preference/route'
import Loading from '@/app/loading'
// import { useRecommendedRestaurantListStore } from '@/store/recommendedRestaurantList'

export function Tab() {
  const userPreference = useUserPreferenceStore((state) => state.userPreference)
  // const { setRecommendedRestaurantList } = useRecommendedRestaurantListStore() // Later we need for favorite...?
  const [loading, setLoading] = useState<boolean>(false)
  const [restaurantsList, setRestaurantsList] = useState<ModifiedRestaurant[]>(
    [],
  )

  useEffect(() => {
    setLoading(true)
    const searchRecommendedRestaurants = async () => {
      try {
        if (!userPreference) {
          return
        }
        const data = await searchRestaurantsByUserAnswer(userPreference)
        setRestaurantsList(data)
      } catch (error) {
        console.error('Failed to fetch preferences:', error)
        setRestaurantsList([])
      } finally {
        setLoading(false)
      }
    }
    void searchRecommendedRestaurants()
  }, [userPreference])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Tabs defaultValue={defaultValue} className="w-full p-3">
          <TabsList className="grid w-full grid-cols-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                aria-label={`${tab.label} button`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={tabs[0].value} data-testid="list-tab">
            <List restaurants={restaurantsList ?? []} />
          </TabsContent>
          <TabsContent value={tabs[1].value} data-testid="map-tab">
            <Card>
              <Map restaurants={restaurantsList ?? []} />
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </>
  )
}
