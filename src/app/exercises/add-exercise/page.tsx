import { getMovements } from '@/lib'
import SetExerciseForm from './components/SetExerciseForm'

type Props = {}

export default async function AddExercisePage({}: Props) {
  const movements: Movement[] = await getMovements()

  return (
    <main className='p-4 '>
      <h2 className='text-xl'>Add Exercise</h2>
      <SetExerciseForm movements={movements} />
    </main>
  )
}
