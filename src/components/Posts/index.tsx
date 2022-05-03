import { FC } from 'react'
import Link from 'next/link'
import { Thumbnail } from '../Thumbnail'
import { Grid, Title, Text } from '@mantine/core'

export type Blog = {
  id: string
  title: string,
  content: string
  eyecatch: {
    url: string
  }
}

type PostProps = {
  blog: Blog
}

export const Post: FC<PostProps> = ({blog}) => {
  return (
    <Grid.Col key={blog.id}>
      <Link href={`/blogs/${blog.id}`}>
        <a>
          <Thumbnail eyecatch={blog.eyecatch} />
          <Title order={2} className={'mt-5 mb-3'} >
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