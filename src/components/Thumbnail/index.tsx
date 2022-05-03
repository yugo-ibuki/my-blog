import { FC } from 'react'

type ThumbnailProps = {
  eyecatch?: { url?: string }
}

export const Thumbnail: FC<ThumbnailProps> = ({ eyecatch }) => {
  return (
    <div>
      {
        !!eyecatch?.url ?
          <img src={eyecatch.url} alt=""/>
          :
          <div className={'w-full h-[350px] bg-gray-200 relative'} >
            <span className={'absolute w-[100px] inset-2/4 -translate-y-1/2 -translate-x-1/2'}>No Image</span>
          </div>
      }
    </div>
  )
}