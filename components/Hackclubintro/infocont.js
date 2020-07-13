/**@jsx jsx*/

import { jsx } from 'theme-ui'

export const GroupInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}>You start hacking.</span> Everyone starts
    hacking from <span sx={{ color: 'orange' }}>day one.</span> We provide
    <a target="_blank" href="https://workshops.hackclub.com/">
      {' '}
      our workshops
    </a>{' '}
    as a roadmap to your coding journey.
  </p>
)

export const ExploreInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}>Make awesome projects.</span> Start making
    awesome projects along with other hack club members and
    <span sx={{ color: 'orange' }}></span>
    <a target="_blank" href="https://scrapbook.hackclub.com/">
      {' '}
      share it
    </a>{' '}
    with the world.
  </p>
)

export const ExhibitInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}>You start sharing.</span>{' '}
    <span sx={{ color: 'green' }}> Everyone in the Hack Club</span> demos their
    projects with others in the club at the end of their club meeting.
  </p>
)
