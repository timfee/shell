import { AppProps } from 'next/app'
import { FC } from 'react'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
const App = ({ Component, pageProps }: AppProps<{ layout?: FC }>) => {
  const Layout: FC =
    Component.defaultProps?.layout || (({ children }) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps} />
      <div>
        <Link href="/index">Green (Good)</Link>•<a href="/index">Green (Bad)</a>
      </div>
      <div>
        <Link href="/purple">Purple (Good)</Link>•
        <a href="/purple">Purple (Bad)</a>
      </div>
    </Layout>
  )
}

export default App
