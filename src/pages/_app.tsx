import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { Header, LayoutWrapper } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>

      <main>
        <Header />
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </MantineProvider>
      </main>
    </>
  )
}

export default MyApp