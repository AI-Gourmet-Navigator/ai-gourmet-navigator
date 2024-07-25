import { type Restaurants } from '@/app/api/preference/route'
import { create } from 'zustand'

interface SearchResultState {
  restaurants: Restaurants[] | null
  setRestaurants: (restaurants: Restaurants[]) => void
}

export const useSearchResultStore = create<SearchResultState>((set) => ({
  restaurants: null,
  setRestaurants: (restaurants) => set({ restaurants }),
}))
