import { getExercises, getMovements } from '@/lib'
import SetExerciseForm from './components/SetExerciseForm'

type Props = {}

export const metadata = {
  title: 'Add Exercise',
  description: 'Powerlifting Program'
}

export default async function AddExercisePage({}: Props) {
  const movements: Movement[] = await getMovements()
  const exercises: Exercise[] = await getExercises({ queryType: 'all' })

  return (
    <main className='p-4 flex gap-4 flex-col'>
      <h2 className='text-xl'>Add Exercise</h2>
      <SetExerciseForm
        movements={movements}
        exercises={exercises}
      />
    </main>
  )
}
