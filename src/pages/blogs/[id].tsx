import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk/dist/esm'
import { Blog } from '@components'
import { formatDate } from '../../libs/formatDate'
import { Title } from '@mantine/core'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { Tag } from '@components/Tag'

type Props = Blog & MicroCMSContentId & MicroCMSDate

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <div>
        <Title order={2} className={'border-b border-cyan-300'}>{props.title}</Title>
        <div className={'flex justify-end items-center gap-x-1'}>
          <AiTwotoneCalendar />
          <time className={'text-sm'}>{formatDate(new Date(props.createdAt))}</time>
        </div>
      </div>
      <div className={'flex gap-x-10 mt-10'}>
        <div className={'w-[80%] flex flex-col gap-y-5'}>
          <div
            className={'prose editor'}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
        <div className={'border rounded h-2/6 w-[20%] p-5 border-cyan-300 flex flex-wrap gap-2'}>
          {
            props.category.map(cat => <Tag key={cat.id} cat={cat.name}/>)
          }
        </div>
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
