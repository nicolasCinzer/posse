'use client'
import { useState } from 'react'

import Program from './Program'
import Blocks from './Blocks'

type Props = {
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function AddProgramForm({ movements, blockTypes }: Props) {
  const [program, setProgram] = useState<Partial<Program>>({ name: '', duration: 0 })

  return (
    <>
      <Program setProgram={setProgram} />
      {program.duration ? (
        <Blocks
          maxDuration={program.duration}
          movements={movements}
          blockTypes={blockTypes}
        />
      ) : (
        <></>
      )}
    </>
  )
}
