import type { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { Blog, Post } from '@components/Posts'
import { Box, Grid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Search, SearchWord } from '@components/Search'
import { useState } from 'react'

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  const [searchResult, setSearchResult] = useState<MicroCMSListResponse<Blog>>()
  const [isArticleFound, setIsArticleFound] = useState<boolean>(true)
  const form = useForm<SearchWord>({initialValues: { word: '' }})
  const handleSubmit = async (values: SearchWord) => {
    const q = values.word
    // TODO リファクタする fetchを切り出す
    const data = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({q})
    })
    if (!data.ok) {
      setIsArticleFound(false)
      return
    }
    const json: MicroCMSListResponse<Blog> = await data.json()
    setSearchResult(json)
  }

  const contents = searchResult ? searchResult.contents : props.contents

  return (
    <Box className={'mt-10'}>
      <Box mb={20}>
        <Search form={form} handleSubmit={handleSubmit} />
      </Box>
      <Grid className={'gap-y-8'}>
        {
          !isArticleFound
            ?
              <p className={'text-red-300'}>不具合が発生しました。</p>
            :
          // TODO リファクタする
          contents.length === 0
          ?
            <p>記事が見つかりませんでした。</p>
          :
          contents.map(blog =>
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
