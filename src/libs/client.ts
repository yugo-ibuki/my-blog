import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_NAME,
  apiKey: process.env.MICROCMS_KEY,
})