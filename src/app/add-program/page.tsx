'use client'
import { useState } from 'react'

import Program from './components/Program'

export default function AddProgram() {
  const [program, setProgram] = useState<Partial<Program>>({ name: '', duration: 0 })

  console.log(program)
  return (
    <main className='p-4'>
      <Program setProgram={setProgram} />
      {program.duration ? <></> : <></>}
    </main>
  )
}
