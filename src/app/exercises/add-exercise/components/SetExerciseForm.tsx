'use client'

import { FormEvent } from 'react'
import { ExerciseTypeEnum } from '@/lib/enums'
import Button from '@/src/components/ui/Button'
import Select from '@/src/components/ui/Select'

type Props = {
  movements: Movement[]
}

export default function SetExerciseForm({ movements }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-acc-color text-dom-color p-4 rounded-md grid grid-cols-2 gap-4'
    >
      <h4 className='text-lg col-span-2'>Exercise Name</h4>
      <input
        type='text'
        className='col-span-2 w-full border-b-2 border-dom-color bg-acc-color outline-none px-2 pb-2 focus:border-comp-color'
        placeholder='Bench Press...'
      />
      <div className='flex justify-center gap-4 items-center'>
        <label htmlFor='movement-select-add-exercises'>Movement</label>
        <Select
          id='movement-select-add-exercises'
          options={['None', ...movements.map(movement => movement.name)]}
          bgColor='acc'
          style='border-b border-dom-color'
        />
      </div>
      <div className='flex justify-center gap-4 items-center'>
        <label htmlFor='type-select-add-exercises'>Type</label>
        <Select
          id='type-select-add-exercises'
          options={Object.values(ExerciseTypeEnum).filter(value => isNaN(Number(value)))}
          bgColor='acc'
          style='border-b border-dom-color'
        />
      </div>
      <Button
        style='col-span-2'
        colors={{ text: 'acc', textHover: 'acc', bg: 'comp', bgHover: 'dom' }}
      >
        Add
      </Button>
    </form>
  )
}
