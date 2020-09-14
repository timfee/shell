import { cache } from '@emotion/css'
import { CacheProvider, css, Global } from '@emotion/react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import tw from '@tailwindcssinjs/macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Global
        styles={css`
          ${tw`font-sans subpixel-antialiased`}
        `}
      />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
