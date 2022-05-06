import { FC } from 'react'
import { Box } from '@mantine/core'

type ThumbnailProps = {
  eyecatch?: { url?: string }
}

export const Thumbnail: FC<ThumbnailProps> = ({ eyecatch }) => {
  return (
    <div>
      {
        !!eyecatch?.url ?
          <img src={eyecatch.url} alt="" />
          :
          <div className={'w-full h-[221px] bg-gray-200 relative'} >
            <Box
              className={'absolute left-[50%] top-[50%]'}
              sx={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              No Image
            </Box>
          </div>
      }
    </div>
  )
}