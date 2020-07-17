/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import styled from '@emotion/styled'

export default () => (
  <div
    sx={{ variant: 'containerspec', mb: 5, pb: [3, 4, 5], ml: [3, 4, 4, 5] }}
  >
    <h1 sx={{ color: 'grey', my: 0 }}>
      <span
        sx={{
          backgroundImage:
            'linear-gradient(-100deg, rgba(243, 234, 164, 0.33), rgba(243, 234, 164, 0.95), rgba(243, 234, 164, 0.1))'
        }}
      ></span>
      Start your own Hack Club!
    </h1>
    <h1 sx={{ variant: 'headerspec', color: 'green' }}>
      Apply for Hack Club 🧢
    </h1>
    <p sx={{ variant: 'paraspec' }}>
      You can apply for your own hack club if you don’t have a hack club near
      you. We are always looking for great club leaders and we will be more than
      happy to help you out in starting your club.{' '}
      <span
        sx={{
          backgroundImage:
            'linear-gradient(-100deg, rgba(243, 234, 164, 0.33), rgba(243, 234, 164, 0.95), rgba(243, 234, 164, 0.1))'
        }}
      >
        Summer 2020 applications accepted on a rolling basis.
      </span>
    </p>

    <Grid columns={[1, 1, 2]}>
      <GrantFeature
        sx={{
          borderRadius: 8,
          //   mr: [3, 4, 1],
          variant: 'imgpad',
          color: 'white',
          //      gridColumn: ['1/3', '1/2', '1/2'],
          pb: [4, 5],
          // maxWidth: '390px',
          ':after': {
            display: ['none', 'initial']
          }
        }}
      >
        <h1 sx={{ ml: 3 }}>Join the movement!</h1>
        <p sx={{ ml: 3, fontSize: 3 }}>
          Apply for a hack club and make a community of makers. We are looking
          for people like you to widespread the movement.
        </p>
        <a
          href="https://apply.hackclub.com/"
          target="_blank"
          sx={{
            ml: 3,
            fontSize: 3,
            color: 'white',
            width: '10%',
            mb: 5,
            textDecorationLine: 'none',
            ':hover': {
              textDecorationLine: 'underline'
            }
          }}
        >
          <span>
            <b>Apply for hack club {` >`}</b>
          </span>
        </a>
      </GrantFeature>
      <Imagesecond />
    </Grid>
  </div>
)

const GrantFeature = styled.div`
  position: relative;
  overflow: visible;
  background: linear-gradient(94.45deg, #ec3750 5.58%, #d61731 98.22%);
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: -4rem;
    right: -2rem;
    background-image: url(spiderman.png);
    width: 12rem;
    height: 12rem;
  }
`

const Imagesecond = () => (
  <div
    sx={{
      //      mr: [3, 4, 2],
      variant: 'imgpad',
      mt: [2, 5, 0],
      height: ['400px', '400px', 'initial']
    }}
  >
    <div
      sx={{
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%), url("communityind.jpg")`,
        boxShadow: 'rgba(0, 0, 0, 0.063) 0px 8px 32px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100%',
        borderRadius: [5, 8],
        display: 'flex',
        flexDirection: 'column-reverse',
        color: 'white',
        pl: 3
      }}
    >
      <p
        sx={{
          fontSize: 3,
          mx: [2, 4],
          mt: 3,
          mb: 4,
          textShadow: '1px 1px 5px black'
        }}
      >
        <b>
          Hack clubs are communities of
          <span sx={{ color: 'cyan' }}> makers </span>
          and we would be more than happy to help you make your own hack club!
        </b>
      </p>
      <h1 sx={{ variant: 'imageh1', mx: [2, 4], my: 0 }}>
        Make a <span sx={{ color: 'orange' }}>community!</span>
      </h1>
    </div>
  </div>
)
