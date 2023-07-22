import { ReactElement } from 'react'

type Props = {
  children: ReactElement | string
}

export default function UnderlineEffect({ children }: Props) {
  return (
    <>
      {children}
      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-acc-color'></span>
    </>
  )
}
