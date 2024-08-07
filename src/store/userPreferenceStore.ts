import { type UserAnswer } from '@/constants/questionList'
import { create } from 'zustand'

interface UserPreferenceState {
  userPreference: UserAnswer | null
  setUserPreference: (userPreference: UserAnswer) => void
}

export const useUserPreferenceStore = create<UserPreferenceState>((set) => ({
  userPreference: null,
  setUserPreference: (userPreference) => set({ userPreference }),
}))
