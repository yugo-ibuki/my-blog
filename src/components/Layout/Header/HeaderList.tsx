import type { FC } from 'react'
import React from 'react'
import Link from 'next/link'

export type NavData = {
  name: string
  href: string
}

type HeaderListProps = {
  navData: NavData[]
  onClose: () => void
}

export const HeaderList: FC<HeaderListProps> = ({
  navData,
  onClose
}) => {
  return (
    <>
      {
        navData.map(nav => {
          return (
            <li key={nav.name} className={'hover:border-b-2 hover:border-red-600 border-b-2 border-white-600'} onClick={onClose}>
              <Link href={nav.href}>
                <a className={'w-full block'}>
                  {nav.name}
                </a>
              </Link>
            </li>
          )
        })
      }
    </>
  )
}
