import type { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { Blog, Post } from '@components/Posts'
import { Box, Grid } from '@mantine/core'

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  return (
    <div>
      <main>
        <Box className={'mt-10'}>
          <Grid className={'gap-y-8'}>
            {
              props.contents.map(blog =>
                <Post
                  key={blog.id}
                  blog={{
                    id: blog.id,
                    title: blog.title,
                    content: blog.content,
                    eyecatch: blog.eyecatch
                  }}
                />
              )
            }
          </Grid>
        </Box>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({endpoint: 'blogs'})
  return {
    props: data
  }
}

export default Index
