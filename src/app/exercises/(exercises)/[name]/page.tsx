import { ExercisesList } from '../../components'
import { getExercises, getMovements } from '@/lib'

type Props = {
  params: {
    name: string
  }
}

export default async function Exercises({ params: { name } }: Props) {
  const exercises: Exercise[] = await getExercises({ name: name.charAt(0).toUpperCase() + name.slice(1) })
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
