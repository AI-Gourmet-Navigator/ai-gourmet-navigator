import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabs, defaultValue } from '../app/result/constants'
import { Map } from './map'
import { List } from './list'

export function Tab() {
  return (
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
        <List />
      </TabsContent>
      <TabsContent value={tabs[1].value} data-testid="map-tab">
        <Card>
          <Map />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
