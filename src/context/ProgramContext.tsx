'use client'
import { createContext, useContext, Dispatch, useReducer, ReactElement, useMemo } from 'react'

const REDUCER_ACTION_TYPE = {
  PROGRAM: 'PROGRAM',
  BLOCKS: { ADD: 'ADD', REMOVE: 'REMOVE', UPDATE: 'UPDATE' },
  RUTINE_DAY: { ADD: 'ADD', REMOVE: 'REMOVE', UPDATE: 'UPDATE' },
  RUTINE_DAY_EXERCISE: { ADD: 'ADD', REMOVE: 'REMOVE', UPDATE: 'UPDATE' }
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string
  payload?: Program | Block[] | RutineDay[] | RutineDayExercise[]
}

type ProgramType = {
  program: Program
  blocks: Block[]
  rutineDay: RutineDay[]
  rutineDayExercise: RutineDayExercise[]
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
    default:
      throw new Error('Undefined ACTION Type.')
  }
}

const useProgramContext = (initProgramState: ProgramType) => {
  const [programState, dispatch] = useReducer(reducer, initProgramState)

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, [])

  return { dispatch, programState, REDUCER_ACTIONS }
}

type useProgramContextType = ReturnType<typeof useProgramContext>

const initProgramContextState: useProgramContextType = {
  programState: initProgramState,
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE
}

const ProgramContext = createContext<useProgramContextType>(initProgramContextState)

export const ProgramProvider = ({ children }: { children?: ReactElement | ReactElement[] }): ReactElement => {
  return <ProgramContext.Provider value={useProgramContext(initProgramState)}>{children}</ProgramContext.Provider>
}

export const useProgram = (): useProgramContextType => useContext(ProgramContext)
