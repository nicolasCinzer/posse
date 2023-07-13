import Movements from './Movements'

type Props = {
  maxDuration: number
  movements: Movement[]
  blockTypes: BlockType[]
}

export default function BlocksLength({ maxDuration, movements, blockTypes }: Props) {
  return (
    <section className='flex flex-col gap-4'>
      <Movements
        maxDuration={maxDuration}
        movements={movements}
        blockTypes={blockTypes}
      />
    </section>
  )
}
