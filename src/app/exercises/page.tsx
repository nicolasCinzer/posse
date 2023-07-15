import getExercises from '@/lib/getExercises'
import getMovements from '@/lib/getMovements'
import ExercisesList from './components/ExercisesList'

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
