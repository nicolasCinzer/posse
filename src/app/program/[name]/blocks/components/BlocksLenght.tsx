import { Movements } from './'
import { Button } from '@/src/components/ui'
import { useRouter } from 'next/navigation'

type Props = {
  maxDuration: number
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function BlocksLength({ maxDuration, movements, blockTypes }: Props) {
  return (
    <>
      <section className='grid grid-cols-4 gap-4 col-span-4'>
        <Movements
          maxDuration={maxDuration}
          movements={movements}
          blockTypes={blockTypes}
        />
      </section>
      <div className='col-span-4 flex gap-4 items-center justify-end'>
        <div>Already blocks lenght setted?</div>
        <Button buttonConfig='page'>Next step</Button>
      </div>
    </>
  )
}
