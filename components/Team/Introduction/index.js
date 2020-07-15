/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'

export default () => (
  <div
    sx={{
      width: ['100%'],
      background: `linear-gradient(131.52deg, #FFB443 25.03%, #F99705 100%)`,
      py: ['7em', '9em']
      //  mx: [4, 0],
      // borderRadius: [5, 0]
      // mt: ['5rem', 0]
    }}
  >
    <div
      sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 5 }}
    >
      <h1
        sx={{
          color: 'white',
          fontSize: [5, 6, 6, 7],
          my: 0
        }}
      >
        Meet the Team
      </h1>
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h1 sx={{ color: 'white', fontSize: [3, 4] }}>
        This is our team which is working hard to make Hack Club-India possible!
      </h1>
    </div>
  </div>
)
