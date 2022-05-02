import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'
import Link from 'next/link'

type Blog = {
  id: number,
  title: string,
  content: string
}

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
        {
          props.contents.map(blog => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    {blog.title}
                  </a>
                </Link>
              </li>
            )
          })
        }
        </ul>
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
