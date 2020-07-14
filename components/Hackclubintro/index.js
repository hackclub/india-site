/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import { GroupInfo, ExploreInfo, ExhibitInfo } from './infocont'

export default () => (
  <div sx={{ variant: 'containerspec', mb: 3 }}>
    <h1 sx={{ mb: 0, color: 'grey' }}>What is Hack Club ?</h1>
    <h1 sx={{ variant: 'headerspec', my: 0 }}>
      <span sx={{ color: 'primary' }}>Philosophy</span>
    </h1>
    <p sx={{ variant: 'paraspec', mt: 0 }}>
      Hack Club is an initiative for students by students. Hack Club is a place
      that lets you tinker, break, and rebuild. After all, you can't make an
      omelet without breaking a few eggs 🍳
    </p>
    <Grid columns={[1, 1, 3]} sx={{ mt: 4, pt: 3 }}>
      <Image text={Text.get('group')} Info={GroupInfo} imgname="group.jpg" />
      <Image
        text={Text.get('explore')}
        Info={ExploreInfo}
        imgname="explore.jpg"
      />
      <Image
        text={Text.get('exhibit')}
        Info={ExhibitInfo}
        imgname="codingvar.jpg"
      />
    </Grid>
  </div>
)

const Image = ({ imgname, text, Info }) => (
  <div sx={{ mx: 1, mr: [2, 4, 1] }}>
    <div
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%),url(hackclubintro/${imgname})`,
        height: ['500px', '400px', '500px'],
        width: '100%',
        borderRadius: [5, 8],
        backgroundSize: 'cover',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.063) 0px 8px 32px',
        pt: 1
      }}
    >
      <h1 sx={{ variant: 'imageh1' }}>{text}</h1>
    </div>
    <div sx={{ variant: 'imageinfo' }}>
      <Info />
    </div>
  </div>
)

const Text = new Map()

Text.set(
  'group',
  ' A group of students gather to start coding. Many are beginners.'
)

Text.set(
  'explore',
  'You start making awesome real-world projects from day one.'
)

Text.set(
  'exhibit',
  'At the end of the day, you exhibit your project to the community.'
)
