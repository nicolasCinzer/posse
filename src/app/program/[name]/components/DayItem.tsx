import { Select } from '@/src/components/ui'

type Props = { day: number; exercises: Exercise[] }

export default function DayItem({ day, exercises }: Props) {
  return (
    <div className='flex flex-col justify-center border rounded px-4 py-2'>
      <h1 className='flex justify-center pb-2'>Day {day + 1}</h1>
      <div className='border-b'></div>
      <div>
        <Select
          options={exercises}
          bgColor='dom'
        />
      </div>
    </div>
  )
}
