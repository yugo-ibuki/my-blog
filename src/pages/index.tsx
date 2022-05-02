import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'

type Blog = {
  id: number,
  title: string,
  content: string
}

type Props = MicroCMSListResponse<Blog> & MicroCMSContentId & MicroCMSDate

const Index: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          props.contents.map(blog => {
            return (
              <div key={blog.id} className={'mt-5'}>
                <div className={'mb-10'}>{blog.title}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.content}`,
                  }}
                />
              </div>
            )
          })
        }
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{}, {id: string}> = async () => {
  const data = await client.getList<Blog>({endpoint: 'blogs'})
  return {
    props: data
  }
}

export default Index
