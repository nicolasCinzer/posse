'use client'

import { FormEvent, useState } from 'react'
import { ExerciseTypeEnum } from '@/lib/enums'
import { ExercisesList } from '../../components'
import { Button, Select } from '@/src/components/ui'
import { addExercise } from '@/lib'

type Props = {
  movements: Movement[]
  exercises: Exercise[]
}

export default function SetExerciseForm({ movements, exercises }: Props) {
  const [movementType, setMovementType] = useState<Partial<Exercise>>({ movementId: 0 })
  const [exerciseType, setExerciseType] = useState<ExerciseType>('Basic')
  const [exerciseName, setExerciseName] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await addExercise({
      name: exerciseName,
      movementId: movementType.movementId,
      type: exerciseType
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='bg-acc-color text-dom-color p-4 rounded-md grid grid-cols-2 gap-4'
      >
        <h4 className='text-lg col-span-2'>Exercise Name</h4>
        <input
          type='text'
          className='col-span-2 w-full border-b-2 border-dom-color bg-acc-color outline-none px-2 pb-2 focus:border-comp-color'
          placeholder='Bench Press...'
          onChange={e => setExerciseName(e.target.value)}
        />
        <div className='flex justify-center gap-4 items-center'>
          <label htmlFor='movement-select-add-exercises'>Movement</label>
          <Select
            id='movement-select-add-exercises'
            options={[{ id: 0, name: 'None' }, ...movements]}
            bgColor='acc'
            style='border-b border-dom-color'
            onChange={e => setMovementType({ movementId: parseInt(e.target.value) })}
          />
        </div>
        <div className='flex justify-center gap-4 items-center'>
          <label htmlFor='type-select-add-exercises'>Type</label>
          <Select
            id='type-select-add-exercises'
            options={Object.values(ExerciseTypeEnum).filter(value => isNaN(Number(value)))}
            bgColor='acc'
            style='border-b border-dom-color'
            onChange={e => setExerciseType(e.target.value)}
          />
        </div>
        <Button
          style='col-span-2'
          buttonConfig='form'
        >
          Add
        </Button>
      </form>
      <div className='border'></div>
      <ExercisesList
        exercises={
          exerciseType && movementType.movementId
            ? exercises.filter(exercise => exercise.type === exerciseType && exercise.movementId === movementType.movementId)
            : exercises.filter(exercise => exercise.movementId === movementType.movementId || exercise.type === exerciseType)
        }
        movements={movements}
      />
    </>
  )
}
