import { FC } from 'react'
import Link from 'next/link'
import { Thumbnail } from '../Thumbnail'
import { Grid, Title, Text } from '@mantine/core'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'

export type Category = MicroCMSContentId & MicroCMSDate & {
  name: string
}

export type Blog = {
  id: string
  title: string,
  content: string
  eyecatch: {
    url: string
  }
  category: Category[]
}

type PostProps = {
  blog: Blog
}

export const Post: FC<PostProps> = ({blog}) => {
  return (
    <Grid.Col className={'w-1/2 max-w-[50%]'}>
      <Link href={`/blogs/${blog.id}`}>
        <a className={'flex flex-col w-full'}>
          <Thumbnail eyecatch={blog.eyecatch} />
          <Title order={2} className={'mt-5 mb-3 text-lg'} >
            {blog.title}
          </Title>
          <Text lineClamp={2}>
            {blog.content.replace(/(<([^>]+)>)/gi, '')}
          </Text>
        </a>
      </Link>
    </Grid.Col>
  )
}