'use client'

import Link from 'next/link'

const ButtonConfig = {
  page: 'bg-comp-color text-acc-color hover:bg-acc-color hover:text-dom-color',
  form: 'bg-comp-color text-acc-color hover:bg-dom-color hover:text-acc-color'
}

export default function Button({ children, onClick, style, buttonConfig, reference }: Button) {
  const button = reference ? (
    <Link
      href={reference}
      className={`${ButtonConfig[buttonConfig]} py-1 px-2 rounded-md ease-in-out transition-all duration-200 ${style || ''}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${ButtonConfig[buttonConfig]} py-1 px-2 rounded-md ease-in-out transition-all duration-200 ${style || ''}`}
    >
      {children}
    </button>
  )

  return button
}
