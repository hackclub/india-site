import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme/index'
import '../lib/css/index.css'
import Meta from '@hackclub/meta'

import { ThemeProvider } from 'theme-ui'

//import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        {/* <ColorSwitcher /> */}
        <Meta name="Hack Club India" title="Hack Club India" as={Head} />
        <Head>
          <meta name="twitter:site" content="@hackclubindia" />{' '}
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
