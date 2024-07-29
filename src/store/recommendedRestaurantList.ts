import { type Restaurants } from '@/app/api/preference/route'
import { create } from 'zustand'

interface RecommendedRestaurantListState {
  recommendedRestaurantList: Restaurants[] | null
  setRecommendedRestaurantList: (
    recommendedRestaurantList: Restaurants[],
  ) => void
}

export const useRecommendedRestaurantListStore =
  create<RecommendedRestaurantListState>((set) => ({
    recommendedRestaurantList: null,
    setRecommendedRestaurantList: (recommendedRestaurantList) =>
      set({ recommendedRestaurantList }),
  }))
