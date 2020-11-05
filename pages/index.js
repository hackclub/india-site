/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from '../components/Header/index'
import Introduction from '../components/Introduction/index'
import HackIntro from '../components/Hackclubintro/index'
import GlobalCommunity from '../components/Globalcommunity/index'
import Clubs from '../components/Clubs/index'
import Scrapbook from '../components/Scrapbook/index'
import Hackathon from '../components/Hackathons/index'
import Footer from '../components/Footer/index'
import Meta from '../components/Meta/index'

export default () => {
  return (
    <>
      <Head>
        <title>Hack Club India</title>
      </Head>
      <Meta isLandingPage={true} />
       <Header />
      <Introduction />
      <HackIntro />
      <GlobalCommunity />
      <Scrapbook />
      <Hackathon />
      <Clubs />
      <Footer />
    </>
  )
}
