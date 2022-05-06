import { FC } from 'react'

type TagProps = {
  cat: string
}

export const Tag: FC<TagProps> = ({ cat}) =>
  <span className={'p-2 border border-cyan-100 rounded text-slate-700 text-xs'}>
    {cat}
  </span>