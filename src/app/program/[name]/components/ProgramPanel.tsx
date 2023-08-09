'use client'
import { useProgram } from '@/src/context/ProgramContext'

function ProgramPanel() {
  const { dispatch, programState, REDUCER_ACTIONS } = useProgram()

  console.log(programState)

  return <div>ProgramPanel</div>
}

export default ProgramPanel
