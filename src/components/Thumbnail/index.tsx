import { FC } from 'react'
import { Box } from '@mantine/core'

type ThumbnailProps = {
  eyecatch?: { url?: string }
}

export const Thumbnail: FC<ThumbnailProps> = ({ eyecatch }) => {
  return (
    <>
      {
        !!eyecatch?.url ?
          <img src={eyecatch.url} alt="" />
          :
          <Box
            className={'flex flex-col relative'}
            sx={{
              '&:before': {
                'content': '""',
                'display': 'block',
                'padding': '53% 0 0',
                'width': '100%',
                'background': 'grey',
              },
              '&:after': {
                'content': '"No Image"',
                'display': 'block',
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'color': 'white',
              }
            }}
          />
      }
    </>
  )
}