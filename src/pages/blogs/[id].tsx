import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'
import { Blog } from '../index'
import { formatDate } from '../../libs/formatDate'

type Props = Blog & MicroCMSContentId & MicroCMSDate

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <div className={'w-full'}>
        <h1>{props.title}</h1>
        <time>{formatDate(new Date(props.createdAt))}</time>
        <div
          className={'prose editor'}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
  const data = await client.getList({endpoint: 'blogs'})
  const ids = data.contents.map(content => `/blogs/${content.id}`)
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, {id: string}> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true }
  }

  const data = await client.getListDetail<Props>({
    endpoint: 'blogs',
    contentId: ctx.params.id,
  })

  return {
    props: data
  }
}

export default BlogId
