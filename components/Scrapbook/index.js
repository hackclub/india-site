/**@jsx jsx*/

import { jsx, Grid, Flex } from 'theme-ui'

export default () => (
  <div sx={{ width: '100%', variant: 'containerspec', mb: [5] }}>
    <h1 sx={{ mb: 0, color: 'grey' }}> Share with the world !</h1>
    <h1 sx={{ color: 'orange', variant: 'headerspec', mt: 0 }}>Scrapbook 📙</h1>
    <p sx={{ variant: 'paraspec' }}>
      Share your projects and daily updates on
      <span sx={{ color: 'red' }}> Hack Club's Scrapbook! </span>
      We know how good it feels to be able to share your ideas and work with
      others and that is what Scrapbook is for, go check it out!
    </p>
    <Grid columns={[1, 1, 2, 3]} sx={{ mr: [4, 6, 0], pr: [2, 0, 0] }}>
      <Scrapbook />
      <img
        src="ss2.png"
        sx={{
          borderRadius: [5, 8],
          ml: [0, 0, 2],
          mt: [3, 3, 0],
          height: ['450px'],
          boxShadow: 'rgba(0, 0, 0, 0.063) 0px 8px 32px'
        }}
      />
    </Grid>
  </div>
)

const Scrapbook = () => (
  <div
    sx={{
      background: `linear-gradient(124.23deg, #EC3750 25.03%, #FFB443 100%)`,
      color: 'white',
      borderRadius: [5, 8],
      pb: [4],
      px: [4, 4, 4, 'initial'],
      gridColumn: [null, null, null, '1/3']
    }}
  >
    <h1 sx={{ width: '100%', textAlign: 'center', fontSize: [5, 6], my: 4 }}>
      Scrapbook!
    </h1>
    <Grid
      columns={[1, 1, 1, 3]}
      sx={{
        flexDirection: ['column', 'column', 'initial'],
        alignItems: 'center',
        justifyItems: 'center'
      }}
    >
      <img
        sx={{ width: ['200px', '200px', '200px', '250px'], ml: 3 }}
        src="old.png"
      />
      <div
        sx={{
          ml: [1, 4],
          mr: [0, 3],
          fontSize: 3,
          gridColumn: [null, null, null, '2/4']
        }}
      >
        <p>
          The Scrapbook is the place where you can share what you are doing and
          see what your peers are doing!
        </p>
      </div>
    </Grid>
    <div
      sx={{
        width: '100%',
        fontSize: 3,
        textAlign: 'center',
        mt: 3
      }}
    >
      <a
        href="https://scrapbook.hackclub.com/"
        target="_blank"
        sx={{ color: 'white', textDecorationLine: 'none' }}
      >
        <span
          sx={{
            ':hover': {
              textDecorationLine: 'underline'
            }
          }}
        >
          Take me there {`>`}
        </span>
      </a>
    </div>
  </div>
)
