/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import { GroupInfo, ExploreInfo, ExhibitInfo } from './infocont'

export default () => (
  <div sx={{ ml: [4, 5], mb: 5 }}>
    <h1 sx={{ mb: 0, color: 'grey' }}>What is Hack Club ?</h1>
    <h1 sx={{ fontSize: [5, 6], width: '80vw', my: 0 }}>
      <span sx={{ color: 'primary' }}>Philosophy</span>
    </h1>
    <p sx={{ mt: 0, fontSize: 3, width: ['80vw'] }}>
      Hack Club is an initiative for students by students. Hack Club is a place
      that lets you tinker, break, and rebuild. After all, you can't make an
      omelet without breaking a few eggs 🍳
    </p>
    <Grid columns={[1, 1, 3]} sx={{ mt: 4, pt: 3 }}>
      <Image text={Text.group} Info={GroupInfo} imgname="group.jpg" />
      <Image text={Text.explore} Info={ExploreInfo} imgname="explore.jpg" />
      <Image text={Text.exhibit} Info={ExhibitInfo} imgname="codingvar.jpg" />
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
      <h1 sx={{ mx: 4, fontSize: 4, textShadow: '1px 1px 5px black' }}>
        {text}
      </h1>
    </div>
    <div sx={{ mt: 3, fontSize: 3, a: { color: 'blue' } }}>
      <Info />
    </div>
  </div>
)

const Text = {
  group: ' A group of students gather to start coding. Many are beginners.',
  explore: 'You start making awesome real-world projects from day one.',
  exhibit: 'At the end of the day, you exhibit your project to the community.'
}
