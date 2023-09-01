import { create } from 'zustand'

interface State {
  movements: Movement[]
}

interface Actions {
  initMovements: (movements: Movement[]) => void
}

export const useMovements = create<State & Actions>((set, get) => ({
  /* States */
  movements: [],

  /* Actions */
  initMovements: (movements: Movement[]) => {
    set({ movements })
  }
}))
