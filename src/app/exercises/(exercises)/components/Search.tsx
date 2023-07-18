'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/exercises/${search}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-4'
    >
      <input
        type='text'
        value={search}
        placeholder='Search...'
        className='w-full bg-dom-color border-b-2 border-acc-color outline-none px-2 pb-2 focus:border-comp-color'
        onChange={e => setSearch(e.target.value)}
      />
      <button className='px-4 bg-acc-color text-comp-color rounded-lg hover:bg-comp-color hover:text-acc-color transition-all duration-200'>
        <FiSearch />
      </button>
    </form>
  )
}
