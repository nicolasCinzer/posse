import ExercisesList from '../components/ExercisesList'
import getExercises from '@/lib/getExercises'
import getMovements from '@/lib/getMovements'

type Props = {
  params: {
    name: string
  }
}

export default async function Exercises({ params: { name } }: Props) {
  const exercises: Exercise[] = await getExercises({ name })
  const movements: Movement[] = await getMovements()

  return (
    <section>
      <ExercisesList
        movements={movements}
        exercises={exercises}
      />
    </section>
  )
}

export async function generateStaticParams() {
  const exercises: Exercise[] = await getExercises({})

  return exercises.map(exercise => ({ name: exercise.name }))
}
