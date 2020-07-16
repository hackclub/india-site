/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
export default () => (
  <div sx={{ variant: 'containerspec', mb: [5] }}>
    <h1 sx={{ fontSize: 4, color: 'grey', mb: 0 }}>
      Organize and attend hackathons!
    </h1>
    <h1 sx={{ variant: 'headerspec', color: 'blue', mt: 0 }}>Hackathons</h1>
    <p sx={{ variant: 'paraspec' }}>
      Hack club members are running the largest hackathons across the world. We
      will give you full support right from
      <span
        sx={{
          backgroundImage:
            'linear-gradient(-100deg, rgba(51, 214, 166, 0.33), rgba(51, 214, 166, 0.95), rgba(243, 234, 164, 0.1))'
        }}
      >
        {' '}
        day one which includes mentorship, stickers, and assistance{' '}
      </span>{' '}
      for successfully running your hackathon.
    </p>
    <Grid columns={[1, 1, 2]}>
      <Stickers />
      <Projects />
    </Grid>
  </div>
)

const Stickers = () => (
  <div
    sx={{
      height: '450px',
      mr: [2, 4, 1]
    }}
  >
    <div
      sx={{
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%), url("club.jpg")`,
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
          mb: 1,
          pb: 5,
          textShadow: '1px 1px 5px black'
        }}
      >
        <b>
          Hack clubs regularly organizes hackathons,workshops and lot of events.
          {/*
          We will provide you stickers from day one for successfull marketing of
          your hackathon!*/}
        </b>
      </p>
      <h1
        sx={{
          variant: 'imageh1',
          mx: [2, 4],
          my: 0,
          fontSize: [null, 5],
          lineHeight: '120%',
          color: 'orange'
        }}
      >
        Attend awesome<span sx={{ color: 'white' }}> hackathons!</span>
      </h1>
    </div>
  </div>
)

const Projects = () => (
  <div
    sx={{
      // gridColumn: [null, null, '3/4'],
      height: '450px',
      mr: [2, 4, 2],
      mt: [2, 0]
    }}
  >
    <div
      sx={{
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%), url("projects.jpg")`,
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
          pb: 4,
          textShadow: '1px 1px 5px black'
        }}
      >
        <b>
          Hack club's philosophy
          <span sx={{ color: 'cyan' }}> is learining by doing. </span>
          Attend nearby hack club events and bring out the innovator inside you!
        </b>
      </p>
      <h1 sx={{ variant: 'imageh1', fontSize: [null, 5], mx: [2, 4], my: 0 }}>
        <span sx={{ color: 'yellow' }}>Make Projects</span>
      </h1>
    </div>
  </div>
)
