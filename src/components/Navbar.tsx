import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex justify-evenly items-center text-acc-color py-2 border-b mx-4'>
      <Link href={'/prs'}>PRs</Link>
      <Link
        href={'/'}
        className='text-2xl hover:text-comp-color transition-all duration-200 hover:tracking-widest'
      >
        POSSE
      </Link>
      <Link href={'/exercises'}>EXERCISES</Link>
    </nav>
  )
}
