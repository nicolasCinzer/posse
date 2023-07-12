'use client'

import Link from 'next/link'

export default function Button({ children, onClick, style, reference }: Button) {
  const button = reference ? (
    <Link
      href={reference}
      className={`text-dom-color py-1 px-2 rounded-md bg-comp-color hover:bg-acc-color ease-in-out transition-all duration-200 ${style}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`text-dom-color py-1 px-2 rounded-md bg-comp-color hover:bg-acc-color ease-in-out transition-all duration-200 ${style}`}
    >
      {children}
    </button>
  )

  return button
}
