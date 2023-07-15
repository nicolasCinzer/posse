import { ReactElement } from 'react'
import Search from './components/Search'
import AddExercise from './components/AddExercise'

export default function ExercisesLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <main className='p-4 flex flex-col gap-4'>
        <section className='flex justify-between'>
          <h2 className='text-xl'>Exercises</h2>
          <AddExercise />
        </section>
        <Search />
        {children}
      </main>
    </>
  )
}
