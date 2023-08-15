'use client'
import { createContext, useContext,  useReducer, ReactElement, useMemo } from 'react'

const REDUCER_ACTION_TYPE = {
  PROGRAM: 'PROGRAM',
  BLOCKS: { ADD: 'BLOCK_ADD', REMOVE: 'BLOCK_REMOVE', UPDATE: 'BLOCK_UPDATE' },
  RUTINE_DAY: { ADD: 'RUTINE_DAY_ADD', REMOVE: 'RUTINE_DAY_REMOVE', UPDATE: 'RUTINE_DAY_UPDATE' },
  RUTINE_DAY_EXERCISE: { ADD: 'RUTINE_DAY_EXERCISE_ADD', REMOVE: 'RUTINE_DAY_EXERCISE_REMOVE', UPDATE: 'RUTINE_DAY_EXERCISE_UPDATE' }
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string
  payload?: Partial<Program> | Partial<Block>[] | Partial<RutineDay>[] | Partial<RutineDayExercise>[]
}

type ProgramType = {
  program: Program
  blocks: Partial<Block>[]
  rutineDay: Partial<RutineDay>[]
  rutineDayExercise: Partial<RutineDayExercise>[]
}

const initProgramState: ProgramType = {
  program: {
    id: 0,
    name: '',
    duration: 0,
    workDaysNumber: 0
  },
  blocks: [],
  rutineDay: [],
  rutineDayExercise: []
}

const reducer = (state: ProgramType, action: ReducerAction): ProgramType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.PROGRAM: {
      if (!action.payload) {
        throw new Error('Program data is missing on PROGRAM Action.')
      }

      const { id, name, duration, workDaysNumber } = action.payload as Program

      return { ...state, program: { id, name, duration, workDaysNumber } }
    }
    case REDUCER_ACTION_TYPE.BLOCKS.ADD: {
      if (!action.payload) {
        throw new Error('Block data is missing on BLOCK ADD Action.')
      }

      const blocks = action.payload as Block[]

      return { ...state, blocks: blocks }
    }
    case REDUCER_ACTION_TYPE.BLOCKS.UPDATE: {
      if (!action.payload) {
        throw new Error('Block data is missing on BLOCK UPDATE Action.')
      }

      const [updatedBlock] = action.payload as Partial<Block>[]

      let blocks: Partial<Block>[]
      if (updatedBlock.id) {
        blocks = state.blocks.map(block => {
          if (block.movementId === updatedBlock.movementId && block.typeId === updatedBlock.typeId) {
            return { ...block, duration: updatedBlock.duration }
          }
          return block
        })
      } else {
        blocks = [...state.blocks, updatedBlock]
      }

      return { ...state, blocks: blocks }
    }
    default:
      throw new Error('Undefined ACTION Type.')
  }
}

const useProgramContext = (initProgramState: ProgramType) => {
  const [programState, dispatch] = useReducer(reducer, initProgramState)

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, [])

  const currentsMovements = [...new Set(programState.blocks.map(block => block.movementId))]

  console.log(currentsMovements)

  return { dispatch, programState, REDUCER_ACTIONS, initProgramState: programState }
}

type useProgramContextType = ReturnType<typeof useProgramContext>

const initProgramContextState: useProgramContextType = {
  programState: initProgramState,
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  initProgramState: initProgramState
}

const ProgramContext = createContext<useProgramContextType>(initProgramContextState)

export const ProgramProvider = ({ children }: { children?: ReactElement | ReactElement[] }): ReactElement => {
  return <ProgramContext.Provider value={useProgramContext(initProgramState)}>{children}</ProgramContext.Provider>
}

export const useProgram = (): useProgramContextType => useContext(ProgramContext)
