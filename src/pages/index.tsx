import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'

type Props = {
  blogs: {
    contents:
      {
        id: string,
        title: string,
        url: string,
        content: string,
        width: number,
        category: {
          id: string,
          createdAt: string,
          updatedAt: string,
          publishedAt: string,
          revisedAt: string,
          name: string
        },
        eyecatch: {
          height: number
        },
        publishedAt: string,
        revisedAt: string,
        createdAt: string,
        updatedAt: string,
      }[],
    totalCount: number,
    offset: number,
    limit: number,
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs }: Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {
          blogs.contents.map(blog => {
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

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  })

  return {
    props: {
      blogs: data.contents
    },
  }
}

export default Home
