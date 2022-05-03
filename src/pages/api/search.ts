import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../libs/client'
import { Blog } from '@components'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await client.get<Blog>({
      endpoint: 'blogs',
      queries: { q: req.body.q },
    })
    res.status(200).json(data)
  } catch(err) {
    console.error(err)
    res.status(500)
  }
}

export default handler
