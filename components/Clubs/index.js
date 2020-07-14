/**@jsx jsx*/

import { jsx } from 'theme-ui'

export default () => (
  <div sx={{ variant: 'containerspec', mb: 5 }}>
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
        Spring 2020 applications accepted on a rolling basis.
      </span>
    </p>
  </div>
)
