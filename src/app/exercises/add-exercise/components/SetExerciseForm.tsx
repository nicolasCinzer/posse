import { ExerciseTypeEnum } from '@/lib/enums'
import Select from '@/src/components/ui/Select'

type Props = {
  movements: Movement[]
}

export default function SetExerciseForm({ movements }: Props) {
  const handleSubmit = () => {}

  return (
    <form>
      <h4 className='text-lg'>Exercise Name</h4>
      <input
        type='text'
        className='w-full bg-dom-color border-b-2 border-acc-color outline-none px-2 pb-2 focus:border-comp-color'
      />
      <div>
        <Select options={['None', ...movements.map(movement => movement.name)]} />
      </div>
      <div>
        <label htmlFor=''></label>
        <Select options={Object.values(ExerciseTypeEnum).filter(value => isNaN(Number(value)))} />
      </div>
    </form>
  )
}
