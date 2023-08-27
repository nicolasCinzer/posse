'use client'
import { useEffect } from 'react'
import { Movements, DaysTable } from '.'
// import { useProgram } from '@/src/context/ProgramContext'
import { useProgram } from '@/src/store/program'

type Props = {
  program: Program
  blockTypes: BlockType[]
  movements: Movement[]
  blocks: Block[]
  exercises: Exercise[]
}

export default function ProgramPanel({ program, blockTypes, movements, blocks, exercises }: Props) {
  const [addProgram, addBlocks] = useProgram(state => [state.addProgram, state.addBlocks])

  useEffect(() => {
    addProgram(program)
    addBlocks(blocks)
  }, [addProgram, addBlocks, program, blocks])

  return (
    <>
      <Movements
        maxDuration={program.duration}
        program={program}
        blockTypes={blockTypes}
        movements={movements}
      />
      <DaysTable
        movements={movements}
        exercises={exercises}
      />
    </>
  )
}
