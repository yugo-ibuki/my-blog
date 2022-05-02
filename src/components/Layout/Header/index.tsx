import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header>
      <div className={'px-[10px]'}>
        <div className={'w-[700px] sp:w-full py-[15px] c-flex mx-auto'}>
          <div className={'c-flex gap-x-3 w-full'}>
            <Link href="/">
              <a className={'c-flex gap-x-3'}>
                <h1 className={'font-bold text-lg mr-2'}>Blog</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
