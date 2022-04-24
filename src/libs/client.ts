import { createClient } from 'microcms-js-sdk'
import { MICROCMS_KEY, MICROCMS_SERVICE_NAME } from '@config/microCms'

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_NAME as string,
  apiKey: MICROCMS_KEY as string,
});