import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import Select from '@/src/components/ui/Select'

export default function Program({ setProgram }: { setProgram: Dispatch<SetStateAction<Partial<Program>>> }) {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl'>Program Alias</h2>
        <div className=''>
          <label
            htmlFor='duration-select'
            className=''
          >
            Weeks
          </label>
          <Select
            options={Array.from(Array(49).keys())}
            onChange={e => setProgram(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            id='duration-select'
          />
        </div>
      </div>
      <input
        type='text'
        className='w-full bg-dom-color border-b-2 border-acc-color outline-none px-2 pb-2 focus:border-comp-color'
        placeholder='Program Example'
        onChange={e => setProgram(prev => ({ ...prev, name: e.target.value }))}
      />
    </section>
  )
}
