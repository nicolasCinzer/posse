'use client'
import { useEffect } from 'react'
import { Movements, DaysTable } from '.'
import { useProgram, useMovements } from '@/store'

type Props = {
  program: Program
  blocks: Block[]
  exercises: Exercise[]
}

export default function ProgramPanel({ program, blocks, exercises }: Props) {
  const [initProgram, initBlocks, initMovements] = useProgram(state => [state.initProgram, state.initBlocks, state.initMovements])
  const [movements] = useMovements(state => [state.movements])

  useEffect(() => {
    initProgram(program)
    initBlocks(blocks)
    initMovements(movements)
  }, [initProgram, initBlocks, initMovements, program, blocks, movements])

  return (
    <>
      <Movements
        maxDuration={program.duration}
        programId={program.id as number}
      />
      <DaysTable exercises={exercises} />
    </>
  )
}
