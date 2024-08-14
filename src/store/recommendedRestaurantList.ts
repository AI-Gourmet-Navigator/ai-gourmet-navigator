import type { ModifiedRestaurant } from '@/app/api/preference/route'
import { create } from 'zustand'

interface RecommendedRestaurantListState {
  recommendedRestaurantList: ModifiedRestaurant[] | null
  setRecommendedRestaurantList: (
    recommendedRestaurantList: ModifiedRestaurant[],
  ) => void
  toggleIsFavoriteByPlaceId: (placeId: string) => void
}

export const useRecommendedRestaurantListStore =
  create<RecommendedRestaurantListState>((set) => ({
    recommendedRestaurantList: null,
    setRecommendedRestaurantList: (recommendedRestaurantList) =>
      set({ recommendedRestaurantList }),
    toggleIsFavoriteByPlaceId: (placeId: string) =>
      set((state) => {
        if (
          !state.recommendedRestaurantList ||
          state.recommendedRestaurantList?.length === 0
        ) {
          return state
        }
        const newRecommendedRestaurantList =
          state.recommendedRestaurantList.map((restaurant) => {
            if (placeId === restaurant.id)
              return {
                ...restaurant,
                isFavorite: !restaurant.isFavorite,
              }
            else return restaurant
          })
        return {
          ...state,
          recommendedRestaurantList: newRecommendedRestaurantList,
        }
      }),
  }))
