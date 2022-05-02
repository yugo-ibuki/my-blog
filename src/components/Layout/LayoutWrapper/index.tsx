import React from 'react'

type Props = {
  children: React.ReactNode
}

export const LayoutWrapper: React.VFC<Props> = ({ children }) => {
  return (
    <div className={'max-w-[700px] sp:max-w-[100%] mx-auto px-5 mb-[60px]'}>
      { children }
    </div>
  )
}