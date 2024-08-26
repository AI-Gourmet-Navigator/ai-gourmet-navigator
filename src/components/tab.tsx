'use client'

import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabs, defaultValue } from '../app/result/constants'
import { Map } from './map'
import { List } from './list'
import type { ModifiedRestaurant } from '@/app/api/preference/route'

interface TabProps {
  restaurants: ModifiedRestaurant[]
}

export function Tab({ restaurants }: TabProps) {
  const params = useSearchParams()
  const activeTab = params.get('tab')

  return (
    // This activeTab prevents the app from getting back to list tab when users update favorite in the map tab
    <Tabs defaultValue={activeTab ?? defaultValue} className="w-full p-3">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            onClick={() => {
              // update activeTab
              window.history.pushState(null, '', `?tab=${tab.value}`)
            }}
            value={tab.value}
            aria-label={`${tab.label} button`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={tabs[0].value} data-testid="list-tab">
        <List restaurants={restaurants} />
      </TabsContent>
      <TabsContent value={tabs[1].value} data-testid="map-tab">
        <Card>
          <Map restaurants={restaurants} />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
