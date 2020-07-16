/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'

export default () => (
  <div sx={{ variant: 'containerspec', mb: [5] }}>
    <h1 sx={{ color: 'green', my: 0 }}>Join a global community !</h1>
    <h1 sx={{ variant: 'headerspec', color: 'orange', my: 0 }}>Community 🌏</h1>
    <p sx={{ variant: 'paraspec', mt: 1 }}>
      Hack Club is a global community of hackers and with Hack Club, you get
      access to a super awesome community that will help you to learn, share,
      and grow.
    </p>
    <Grid columns={[1, 1, 2, 3]}>
      <Image />
      <Imagesecond />
    </Grid>
  </div>
)

const Image = () => (
  <div
    sx={{
      gridColumn: [null, null, null, '1/3'],
      height: '500px',
      mr: [3, 4, 1]
    }}
  >
    <div
      sx={{
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%), url("community.jpg")`,
        boxShadow: 'rgba(0, 0, 0, 0.063) 0px 8px 32px',
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        borderRadius: [5, 8],
        display: 'flex',
        flexDirection: 'column-reverse',
        color: 'white',
        pl: 3
      }}
    >
      <span sx={{ pb: 5 }}>
        <a
          href="https://hackclub.com/slack/"
          target="_blank"
          sx={{
            color: 'green',

            mx: [2, 4],
            fontSize: 3,
            textDecorationLine: 'none',
            mt: 0,
            ':hover': {
              textDecorationLine: 'underline',
              textShadow: '1px 1px 5px black'
            }
          }}
        >
          <b>Join our slack {`>`}</b>
        </a>
      </span>
      <p
        sx={{
          fontSize: 3,
          mx: [2, 4],
          mt: 3,
          mb: 1,
          textShadow: '1px 1px 5px black'
        }}
      >
        <b>
          We run our community <span sx={{ color: 'red' }}>over slack</span>,
          join hack club's slack to chat with the other hack clubbers around the
          world.
        </b>
      </p>
      <h1 sx={{ variant: 'imageh1', mx: [2, 4], my: 0 }}>
        A Global Community!
      </h1>
    </div>
  </div>
)

const Imagesecond = () => (
  <div
    sx={{
      variant: 'imgpad',
      gridColumn: [null, null, null, '3/4'],
      height: '500px',

      mt: [2, 0]
    }}
  >
    <div
      sx={{
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%), url("rickshaw.jpg")`,
        boxShadow: 'rgba(0, 0, 0, 0.063) 0px 8px 32px',
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        borderRadius: [5, 8],
        display: 'flex',
        flexDirection: 'column-reverse',
        color: 'white',
        pl: 3,
        backgroundPosition: 'center center'
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
          We are available on the
          <span sx={{ color: 'cyan' }}> #india channel </span>
          on the hack club's slack. Join us there and be part of the community.
        </b>
      </p>
      <h1 sx={{ variant: 'imageh1', mx: [2, 4], my: 0 }}>
        Join us on <span sx={{ color: 'orange' }}>#india!</span>
      </h1>
    </div>
  </div>
)
