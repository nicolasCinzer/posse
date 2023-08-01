import { Movements } from './'

type Props = {
  maxDuration: number
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function BlocksLength({ maxDuration, movements, blockTypes }: Props) {
  return (
    <section className='grid grid-cols-4 gap-4 col-span-4'>
      <Movements
        maxDuration={maxDuration}
        movements={movements}
        blockTypes={blockTypes}
      />
    </section>
  )
}
