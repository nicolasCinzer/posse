'use client'
import { useEffect } from 'react'
import { Movements, DaysTable } from '.'
import { useProgram } from '@/src/context/ProgramContext'

type Props = {
  program: Program
  blockTypes: BlockType[]
  movements: Movement[]
  blocks: Block[]
}

export default function ProgramPanel({ program, blockTypes, movements, blocks }: Props) {
  const { dispatch, REDUCER_ACTIONS } = useProgram()

  useEffect(() => {
    dispatch({ type: REDUCER_ACTIONS.PROGRAM, payload: program })
    dispatch({ type: REDUCER_ACTIONS.BLOCKS.ADD, payload: blocks })
  }, [dispatch, REDUCER_ACTIONS, program, blocks])

  return (
    <>
      <Movements
        maxDuration={program.duration}
        program={program}
        blockTypes={blockTypes}
        movements={movements}
      />
      <DaysTable movements={movements} />
    </>
  )
}
