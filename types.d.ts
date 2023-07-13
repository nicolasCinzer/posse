type BlockType = {
  id: number
  name: string
}

type BlockTypeState = BlockType & {
  currentDuration: number
}

type Movement = {
  id: number
  name: string
}

type Program = {
  id: number
  name: string
  duration: number
}

type Block = {
  id: number
  typeID: number
  movementID: number
  duration: number
}

type Exercise = {
  id: number
  movementID?: number
  name: string
  type: 'Basic' | 'Variant' | 'Accessory' | 'Other' | null
}

type Mesocycle = {
  id: number
  blockID: number
  duration: number
}

type PRs = {
  id: number
  exerciseID: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type RutineDay = {
  id: number
  blockID: number
  mesocycleID: number
  week: number
  day: number
}

type RutineDayExercise = {
  id: number
  rutineDayID: number
  exerciseID: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type Button = {
  children: string
  onClick?: () => {}
  style?: string
  reference?: string
}

type Select = {
  options: number[] | string[]
  onChange?: (e: any) => void
  style?: string
  id?: string
}
