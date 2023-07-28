'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Select } from '@/src/components/ui'
import { addProgram } from '@/lib'

export default function Program() {
  const [program, setProgram] = useState<Partial<Program>>({ name: '', duration: 0, workDaysNumber: 0 })
  const [error, setError] = useState({ name: false, duration: false, workDaysNumber: false })

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    !program.name ? setError(prev => ({ ...prev, name: true })) : setError(prev => ({ ...prev, name: false }))
    !program.duration ? setError(prev => ({ ...prev, duration: true })) : setError(prev => ({ ...prev, duration: false }))
    !program.workDaysNumber ? setError(prev => ({ ...prev, workDaysNumber: true })) : setError(prev => ({ ...prev, workDaysNumber: false }))

    if (!program.name || !program.duration || !program.workDaysNumber) return

    await addProgram(program)

    router.push(`program/${program.name}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='grid grid-cols-2 gap-4'
    >
      <h2 className={`text-xl ${error.name ? 'text-comp-color' : 'text-acc-color'}`}>Program Alias</h2>
      <div className='flex justify-end'>
        <Button
          style=''
          buttonConfig='page'
        >
          Create
        </Button>
      </div>
      <input
        type='text'
        className='col-span-2 w-full bg-dom-color border-b-2 border-acc-color outline-none px-2 pb-2 focus:border-comp-color'
        placeholder='Program Example'
        onChange={e => setProgram(prev => ({ ...prev, name: e.target.value }))}
      />
      <div className='col-span-2'>
        <label
          htmlFor='worksday-select'
          className={`${error.workDaysNumber ? 'text-comp-color' : 'text-acc-color'}`}
        >
          How many days a week will train?
        </label>
        <Select
          options={Array.from(Array(8).keys())}
          onChange={e => setProgram(prev => ({ ...prev, workDaysNumber: parseInt(e.target.value) }))}
          id='duration-select'
          bgColor='dom'
        />
      </div>
      <div className='col-span-2'>
        <label
          htmlFor='duration-select'
          className={`${error.duration ? 'text-comp-color' : 'text-acc-color'}`}
        >
          How many weeks will program last?
        </label>
        <Select
          options={Array.from(Array(49).keys())}
          onChange={e => setProgram(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
          id='duration-select'
          bgColor='dom'
        />
      </div>
    </form>
  )
}
