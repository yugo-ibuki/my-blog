import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import Link from 'next/link'

export type Blog = {
  id: number,
  title: string,
  content: string
  eyecatch: {
    url: string
  }
}

type Props = MicroCMSListResponse<Blog>

const Index: NextPage<Props> = (props) => {
  return (
    <div>
      <main>
        <ul>
        {
          props.contents.map(blog => {
            return (
              <li key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                  <a>
                    {
                      blog?.eyecatch?.url ?
                        <img src={blog.eyecatch.url} alt=""/>
                      :
                        <div className={'w-full h-[350px] bg-gray-200 relative'} >
                          <span className={'absolute w-[100px] inset-2/4 -translate-y-1/2 -translate-x-1/2'}>No Image</span>
                        </div>
                    }
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
