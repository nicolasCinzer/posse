type BlockType = {
  id?: number
  name: string
}

type Movement = {
  id?: number
  name: string
}

type Program = {
  id?: number
  name: string
  duration: number
  workDaysNumber: number
}

type Block = {
  id?: number
  programId: number
  typeId: number
  movementId: number
  duration: number
}

type ExerciseType = 'Basic' | 'Variant' | 'Accessory' | null

type Exercise = {
  id?: number
  movementId: number
  name: string
  type: ExerciseType
}

type PRs = {
  id?: number
  exerciseId: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type RutineDay = {
  id?: number
  programId: number
  week: number
  day: number
}

type RutineDayExercise = {
  id?: number
  rutineDayId: number
  exerciseId: number
  series: number
  weight: number
  reps: number
  unit: 'LBS' | 'KGs'
  comments: string
}

type ButtonConfigColors = 'page' | 'form'

type Button = {
  children: string
  onClick?: (e: any) => void
  style?: string
  buttonConfig: ButtonConfigColors
  reference?: string
}

type SelectOptions = number[] | string[] | (string | ExerciseTypeEnum)[] | Partial<Movement[]>

type Select = {
  selectedValue?: number | string
  options: SelectOptions
  onChange?: (e: any) => void
  style?: string
  bgColor?: string
  id?: string
}
