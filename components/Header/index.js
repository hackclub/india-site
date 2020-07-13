/**@jsx jsx*/
import { jsx, MenuButton } from 'theme-ui'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Icon from '@hackclub/icons'

export default () => {
  return (
    <div
      sx={{
        width: '100vw',
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: 'white',
        opacity: '0.97',
        borderBottom: 'soldi 1px grey'
      }}
    >
      <img
        sx={{
          width: ['100px', '120px'],
          ml: [3, 4, 4, 5],
          position: 'absolute'
        }}
        src="hackclubflag.png"
      />
      <div
        sx={{
          display: ['flex'],
          flexDirection: ['row-reverse', 'row-reverse', 'row'],
          justifyContent: [null, null, 'center']
        }}
      >
        <Icon
          glyph="menu"
          sx={{ display: ['initial', 'initial', 'none'] }}
          size={55}
        />
        {/*
      <GiHamburgerMenu
        sx={{
          display: ['initial', 'initial', 'none'],
          color: 'white',
          height: 25,
          width: 25
        }}
      />*/}
        <Link Text="Home" />
        <Link Text="Events" />
        <Link Text="Join" />
        <Link Text="Team" />
      </div>
    </div>
  )
}

const Link = ({ Text }) => (
  <p sx={{ mx: 3, fontSize: 2, display: ['none', 'none', 'initial'] }}>
    <span sx={{ cursor: 'pointer', color: 'mute' /* color: white'*/ }}>
      {Text}
    </span>
  </p>
)

/** <div sx={{ width: '100vw', display: 'flex' }}>
    <img sx={{ width: '120px', ml: 5 }} src="hackclubflag.png" />
    <div sx={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
      <Link Text="Home" />
      <Link Text="Clubs" />
      <Link Text="Workshops" />
      <Link Text="Team" />
    </div>
  </div> */
