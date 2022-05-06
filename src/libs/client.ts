import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_NAME,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_KEY,
})