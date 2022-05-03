import type { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { Blog, Post } from '@components/Posts'
import { Box, Button, Grid, Input } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Search, SearchWord } from '@components/Search'

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  const form = useForm<SearchWord>({initialValues: { word: '' }})
  return (
    <Box className={'mt-10'}>
      <Box mb={20}>
        <Search form={form} />
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
