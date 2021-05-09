import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/LayoutPage'

const IndexPage: NextPageWithLayout = () => <>Hello, mom!</>

IndexPage.defaultProps = {
  layout: DefaultLayout
}

export default IndexPage
