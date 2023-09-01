import { create } from 'zustand'

interface State {
  blockTypes: BlockType[]
}

interface Actions {
  initBlockTypes: (blockTypes: BlockType[]) => void
}

export const useBlockTypes = create<State & Actions>((set, get) => ({
  /* States */
  blockTypes: [],

  /* Actions */
  initBlockTypes: (blockTypes: BlockType[]) => {
    set({ blockTypes })
  }
}))
