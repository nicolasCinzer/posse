'use client'

import Link from 'next/link'

export default function Button({ children, onClick, style, colors, reference }: Button) {
  const button = reference ? (
    <Link
      href={reference}
      className={`text-${colors?.text}-color py-1 px-2 rounded-md bg-${colors?.bg}-color hover:bg-${colors?.bgHover}-color hover:text-${colors?.textHover}-color ease-in-out transition-all duration-200 ${style}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`text-${colors?.text}-color py-1 px-2 rounded-md bg-${colors?.bg}-color hover:bg-${colors?.bgHover}-color hover:text-${colors?.textHover}-color ease-in-out transition-all duration-200 ${style}`}
    >
      {children}
    </button>
  )

  return button
}
