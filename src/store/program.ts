import { create } from 'zustand'

type TotalBlocksDuration = {
  [key: string]: number
}

interface State {
  program: Program
  blocks: Block[]
  rutineDays: RutineDay[]
  rutineDayExercises: RutineDayExercise[]
  totalBlocksDuration: TotalBlocksDuration
  currentsMovements: Number[]
  currentWeek: Number
}

interface Actions {
  initProgram: (program: Program) => void
  initBlocks: (blocks: Block[]) => void
  initMovements: (movements: Movement[]) => void
  updateBlock: (updatedBlock: Block) => TotalBlocksDuration
  updateMovements: (movementId: number, action: 'ADD' | 'REMOVE') => void
}

export const useProgram = create<State & Actions>((set, get) => ({
  /* States */
  program: {
    id: 0,
    name: '',
    duration: 0,
    workDaysNumber: 0
  },
  blocks: [],
  rutineDays: [],
  rutineDayExercises: [],
  totalBlocksDuration: {},
  currentsMovements: [],
  currentWeek: 0,

  /* Actions */
  initProgram: (program: Program) => {
    set({ program })
  },
  initBlocks: (blocks: Block[]) => {
    set({ blocks })
  },
  initRutineDay: (rutineDays: RutineDay[]) => {
    const currentWeek: number = rutineDays.length ? Math.max(...([...new Set(rutineDays.map(day => day.week).filter(week => week))] as number[])) : 1

    set({ rutineDays, currentWeek })
  },
  initRutineDayExercise: () => {},
  initMovements: (movements: Movement[]) => {
    const currentsMovements = movements.map(movement => movement.id as number)
    set({ currentsMovements })
  },

  updateBlock: (updatedBlock: Block) => {
    let newBlocks: Block[]
    let { blocks, rutineDays } = get()

    let loadedBlock: Boolean = blocks.some(block => block.movementId === updatedBlock.movementId && block.typeId === updatedBlock.typeId)

    if (!loadedBlock) {
      newBlocks = [...blocks, updatedBlock]
    } else {
      newBlocks = blocks.map(block => {
        if (block.movementId === updatedBlock.movementId && block.typeId === updatedBlock.typeId) {
          return { ...block, duration: updatedBlock.duration }
        }

        return block
      })
    }

    const totalBlocksDuration: TotalBlocksDuration = {}
    newBlocks.map(block => {
      let movement: string = block.movementId?.toString() as string

      Object.keys(totalBlocksDuration).some(key => key === movement)
        ? (totalBlocksDuration[movement] += block.duration as number)
        : (totalBlocksDuration[movement] = block.duration as number)
    })

    console.log(rutineDays)

    const currentWeek: number = rutineDays.length ? Math.max(...([...new Set(rutineDays.map(day => day.week).filter(week => week))] as number[])) : 1

    set({ blocks: newBlocks, totalBlocksDuration, currentWeek })

    return totalBlocksDuration
  },
  updateMovements: (movementId: number, action: 'ADD' | 'REMOVE') => {
    const { currentsMovements } = get()

    if (action === 'ADD') {
      set({ currentsMovements: currentsMovements.concat([movementId]).sort() })
    }

    if (action === 'REMOVE') {
      set({ currentsMovements: currentsMovements.filter(movement => movement !== movementId) })
      console.log(currentsMovements.filter(movement => movement !== movementId))
    }
  }
}))
