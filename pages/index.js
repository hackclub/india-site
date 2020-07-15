/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from '../components/Header/index'
import Introduction from '../components/Introduction/index'
import HackIntro from '../components/Hackclubintro/index'
import GlobalCommunity from '../components/Globalcommunity/index'
import Clubs from '../components/Clubs/index'
import Scrapbook from '../components/Scrapbook/index'

export default () => {
  return (
    <>
      <Head>
        <title>Hack Club India</title>
      </Head>
      <Header />
      <Introduction />
      <HackIntro />
      <GlobalCommunity />
      <Scrapbook />
      <Clubs />
    </>
  )
}
