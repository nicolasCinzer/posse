import { ReactElement } from 'react'
import { getPrograms } from '@/lib'
import { UnderlineEffect } from '@/src/components/ui'
import { ProgramProvider } from '@/src/context/ProgramContext'

type Props = {
  children: ReactElement
  params: {
    name: string
  }
}

export default async function ProgramLayout({ children, params: { name } }: Props) {
  const programName = decodeURI(name)

  const [program]: Program[] = await getPrograms({ name })

  return (
    <main className='p-4 grid grid-cols-4 gap-4 no-scrollbar overflow-auto'>
      <h1 className='text-2xl group w-max col-span-2'>
        <UnderlineEffect>{programName}</UnderlineEffect>
      </h1>
      <h2 className='col-span-2 flex justify-end items-center text-xl'>{program.duration} Weeks</h2>
      <ProgramProvider>{children}</ProgramProvider>
    </main>
  )
}