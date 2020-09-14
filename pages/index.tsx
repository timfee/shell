import Link from 'next/link'

/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from '@tailwindcssinjs/macro'

const IndexPage = () => (
  <>
    <h1 css={tw`text-2xl font-bold`}>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a css={tw`text-blue-600`}>About</a>
      </Link>
    </p>
  </>
)

export default IndexPage
