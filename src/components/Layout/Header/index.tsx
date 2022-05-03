import React from 'react'
import Link from 'next/link'
import { SiMicrodotblog } from 'react-icons/si'

export const Header: React.FC = () => {
  return (
    <header>
      <div className={'px-[10px]'}>
        <div className={'w-[700px] sp:w-full py-[15px] c-flex mx-auto'}>
          <div className={'flex gap-x-3 w-[500px]'}>
            <Link href="/">
              <a className={'flex items-center gap-x-3'}>
                <SiMicrodotblog />
                <h1 className={'font-bold text-lg mr-2'}>Blog</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}