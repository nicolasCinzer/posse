import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav>
      <Link href={'/prs'}>PRs</Link>
      <Link href={'/'}></Link>
    </nav>
  )
}
