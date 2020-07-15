/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import Header from '../components/Header/index'
import Intro from '../components/Team/Introduction/index'
import Card from '../components/Team/card'
import Footer from '../components/Footer/index'

export default () => (
  <div sx={{ width: '100%' }}>
    <Header />
    <Intro />
    <Grid columns={[1, 1, 2]} sx={{ pb: 5, mt: [4, 5] }}>
      <Card
        url={'athul'}
        name="Athul Blesson"
        position="Regional Director at Hack Club"
      />
      <Card
        url={'annlee'}
        name="Annlee Fores"
        position="COO at Hack Club APAC"
      />
      <Card
        url={'arun'}
        name="Arun Mani"
        position="CTO at Hack Club APAC
"
      />
      <Card
        url={'thejaswi'}
        name="Thejaswi Prakash"
        position="Content & Social media at Hack Club APAC"
      />
    </Grid>
    <Footer />
  </div>
)
