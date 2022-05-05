import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'
import { Blog } from '@components'
import { formatDate } from '../../libs/formatDate'
import { Title } from '@mantine/core'
import { AiTwotoneCalendar } from 'react-icons/ai'

type Props = Blog & MicroCMSContentId & MicroCMSDate

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className={'relative'}>
      <div className={'w-full flex flex-col gap-y-5 mt-10'}>
        <Title order={2} className={'border-b border-cyan-300'}>{props.title}</Title>
        <div className={'flex justify-end items-center gap-x-1'}>
          <AiTwotoneCalendar />
          <time className={'text-sm'}>{formatDate(new Date(props.createdAt))}</time>
        </div>
        <div
          className={'prose editor'}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
      <div className={'border rounded w-[150px] h-[200px] border-cyan-300 fixed right-5 top-5'}>
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
