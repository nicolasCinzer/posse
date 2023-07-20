'use client'

import { Button } from '@/src/components/ui'
import { useRouter } from 'next/navigation'

export default function AddExercise() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push(`/exercises/add-exercise`)}
      buttonConfig='page'
    >
      Add Exercise
    </Button>
  )
}
