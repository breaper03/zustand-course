import { create } from 'zustand'

interface BearState {
  blackBears: number
  polarBears: number
  pandaBears: number
  increasePopulation: (by: number) => void
  removeAllBears: () => void
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increasePopulation: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  removeAllBears: () => set({blackBears: 0})
}))