/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from '../components/Header/index'
import Introduction from '../components/Introduction/index'

export default () => (
  <div sx={{ height: '100%', width: '100%' }}>
    <Head>
      <title>Hack Club India</title>
    </Head>
    <Header />
    <Introduction />
  </div>
)
