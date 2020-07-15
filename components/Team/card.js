/**@jsx jsx*/

import { jsx, name } from 'theme-ui'

export default ({ url, name, position }) => (
  <div
    sx={{
      background: `linear-gradient(127.78deg, #1F2D3D 25.03%, #17202B 100%)`,
      my: [3],
      mx: [4],
      borderRadius: '10px',
      pb: 3
    }}
  >
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <img
        src={`team/${url}.jpg`}
        sx={{
          width: '120px',
          borderRadius: '200px',
          mt: 4,
          border: '2px solid white'
        }}
      />
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h1 sx={{ color: 'white', mb: 0 }}>{name}</h1>
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h2 sx={{ color: 'white', mt: 0, mx: 2 }}>{position}</h2>
    </div>
  </div>
)
