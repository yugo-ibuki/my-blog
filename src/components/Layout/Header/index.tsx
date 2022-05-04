import React from 'react'
import Link from 'next/link'
import { SiMicrodotblog } from 'react-icons/si'

export const Header: React.FC = () => {
  return (
    <header>
      <div className={'w-[700px] sp:w-full py-[15px] px-5 mx-auto'}>
        <div className={'flex gap-x-3 w-[500px]'}>
          <Link href="/">
            <a className={'flex items-center gap-x-3 text- no-underline text-inherit'}>
              <SiMicrodotblog />
              <h1 className={'font-bold text-lg mr-2'}>Blog</h1>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
