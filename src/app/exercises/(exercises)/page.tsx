import { getExercises, getMovements } from '@/lib'
import { ExercisesList } from './components'

export default async function Exercises() {
  const exercises: Exercise[] = await getExercises({})
  const movements: Movement[] = await getMovements()

  return (
    <section className=''>
      <ExercisesList
        exercises={exercises}
        movements={movements}
      />
    </section>
  )
}
