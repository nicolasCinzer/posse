import getMovements from '@/lib/getMovements'
import SetExerciseForm from './components/SetExerciseForm'

type Props = {}

export default async function AddExercisePage({}: Props) {
  const movements: Movement[] = await getMovements()

  return (
    <section>
      <h2 className='text-xl'>Add Exercise</h2>
      <SetExerciseForm movements={movements} />
    </section>
  )
}
