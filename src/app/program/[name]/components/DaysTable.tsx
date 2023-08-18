import { useProgram } from '@/src/context/ProgramContext'
import DayItem from './DayItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'

type Props = { movements: Movement[]; exercises: Exercise[] }

export default function DaysTable({ movements, exercises }: Props) {
  const { programState, currentWeek } = useProgram()

  return (
    <section className='flex flex-col border-t py-4 col-span-4'>
      <h1 className='text-xl'>Week {currentWeek}</h1>
      <div className='flex gap-4 pt-4 overflow-y-auto pb-2 scroll-smooth'>
        {Array.from(Array(programState.program.workDaysNumber).keys()).map(day => (
          <DayItem
            key={day}
            exercises={exercises}
            day={day}
          />
        ))}
      </div>
    </section>
  )
}
