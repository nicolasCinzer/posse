import { create } from 'zustand'

interface State {
  program: Program
  blocks: Partial<Block>[]
  rutineDay: Partial<RutineDay>[]
  rutineDayExercise: Partial<RutineDayExercise>[]
  addProgram: (program: Program) => void
  addBlocks: (blocks: Partial<Block>[]) => void
  updateBlock: (updatedBlock: Partial<Block>) => void
}

export const useProgram = create<State>((set, get) => ({
  program: {
    id: 0,
    name: '',
    duration: 0,
    workDaysNumber: 0
  },
  blocks: [],
  rutineDay: [],
  rutineDayExercise: [],
  addProgram: (program: Program) => {
    set({ program })
  },
  addBlocks: (blocks: Partial<Block>[]) => {
    set({ blocks })
  },
  updateBlock: (updatedBlock: Partial<Block>) => {
    if (!updatedBlock.id) {
      set(state => ({ blocks: [...state.blocks, updatedBlock] }))
    } else {
      set(state => ({
        blocks: state.blocks.map(block => {
          if (block.movementId === updatedBlock.movementId && block.typeId === updatedBlock.typeId) {
            return { ...block, duration: updatedBlock.duration }
          }
          return block
        })
      }))
    }
  }
}))
