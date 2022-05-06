import { FC } from 'react'

type TagProps = {
  text: string
}

export const Tag: FC<TagProps> = ({
  text
}) => {
  return (
    <span className={'p-2 border border-cyan-100 rounded text-slate-500'}>
      {text}
    </span>
  )
}