import { Dispatch, SetStateAction } from 'react'

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
          <select
            id='duration-select'
            className='bg-dom-color p-2 gap-4 outline-none'
            onChange={e => setProgram(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
          >
            {Array.from(Array(48).keys()).map(duration => (
              <option
                key={duration}
                value={duration}
              >
                {duration}
              </option>
            ))}
          </select>
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
