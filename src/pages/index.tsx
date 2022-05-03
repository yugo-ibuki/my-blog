import type { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { Blog, Post } from '@components/Posts'
import { Box, Button, Grid, Input } from '@mantine/core'

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  return (
    <Box className={'mt-10'}>
      <Box mb={20}>
        <Grid>
          <Grid.Col className={'max-w-[80%]'}>
            <Input />
          </Grid.Col>
          <Grid.Col className={'max-w-[20%]'}>
            <Button
              variant="gradient"
              color={'dark'}
              fullWidth
              className={"text-cyan-300 border-solid border-cyan-200 border-[1px] rounded hover:border-cyan-500 hover:text-cyan-500"}
            >
              Search
            </Button>
          </Grid.Col>
        </Grid>
      </Box>
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
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({endpoint: 'blogs'})
  return {
    props: data
  }
}

export default Index
