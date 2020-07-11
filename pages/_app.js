import * as React from 'react'
import NextApp from 'next/app'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme/index'
import '../lib/css/index.css'

import { ThemeProvider } from 'theme-ui'

//import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        {/* <ColorSwitcher /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
