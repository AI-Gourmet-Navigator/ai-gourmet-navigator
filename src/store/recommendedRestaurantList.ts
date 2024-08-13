import type { ModifiedRestaurant } from '@/app/api/preference/route'
import { create } from 'zustand'

interface RecommendedRestaurantListState {
  recommendedRestaurantList: ModifiedRestaurant[] | null
  setRecommendedRestaurantList: (
    recommendedRestaurantList: ModifiedRestaurant[],
  ) => void
}

export const useRecommendedRestaurantListStore =
  create<RecommendedRestaurantListState>((set) => ({
    recommendedRestaurantList: null,
    setRecommendedRestaurantList: (recommendedRestaurantList) =>
      set({ recommendedRestaurantList }),
  }))
