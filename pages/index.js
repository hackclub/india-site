/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from '../components/Header/index'
import Introduction from '../components/Introduction/index'
import HackIntro from '../components/Hackclubintro/index'
import GlobalCommunity from '../components/Globalcommunity/index'
import Clubs from '../components/Clubs/index'

export default () => {
  return (
    <div sx={{ height: '100%', width: '100%' }}>
      <Head>
        <title>Hack Club India</title>
      </Head>
      <Header />
      <Introduction />
      <HackIntro />
      <GlobalCommunity />
      <Clubs />
    </div>
  )
}
