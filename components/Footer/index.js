/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

export default () => (
  <div
    className="footer"
    sx={{
      width: '100vw',
      background: 'rgb(249, 249, 250) url("/pattern.svg") repeat scroll 0% 0',
      pt: 5,
      mt: 3,
      pb: 5
    }}
  >
    <Grid
      columns={[null, null, 2]}
      sx={{
        width: '100vw',
        img: {
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            transition: '0.1s'
          }
        },
        gap: [0, 'initial']
      }}
    >
      <div
        className="footerfirsthalf"
        sx={{
          mx: 'auto',
          display: ['flex', 'flex', 'initial'],
          flexWrap: 'wrap',
          justifyContent: 'center',
          a: {
            textDecorationLine: 'none',
            color: '#1F2D48'
          }
        }}
      >
        <p
          sx={{
            ml: [3, 3, 5],
            fontSize: [2, 2, 3],
            textAlign: ['center', 'center', 'initial']
          }}
        >
          <span
            sx={{
              textAlign: ['center', 'center', 'initial']
            }}
          >
            Adi Shankara ,Vidya Bharathi Nagar Mattoor, Kalady, Ernakulam Kerala
            683574
          </span>
        </p>
        {/*
        <p
          sx={{
            ml: [3, 3, 5],
            fontSize: [2, 2, 3]
          }}
          onClick={() => open('./resources')}
        >
          <span
            sx={{
              ':hover': {
                cursor: 'pointer'
              }
            }}
          >
            <a href="./resources">Resources</a>
          </span>
        </p>*/}
        <p
          sx={{
            ml: [3, 3, 5],
            mt: [0],
            fontSize: [2, 2, 3],
            flexBasis: ['100%', '100%', null],
            textAlign: ['center', 'center', 'initial']
          }}
        >
          Contact- india@hackclub.com
        </p>
      </div>
      <div className="footersecondhalf" sx={{ mx: 'auto' }}>
        <p sx={{ fontSize: [2, 2, 3], mr: [1, null], textAlign: ['center'] }}>
          Connect With Us
        </p>
        <a href="https://www.facebook.com/hackclubindia/" target="_blank">
          <img
            src="social/facebook.png"
            onClick={() =>
              open(`https://www.facebook.com/hackclubindia/`, '_blank')
            }
            sx={{
              width: [40, 46, 50, 64],
              height: [40, 46, 50, 64],
              mx: [2, 3]
            }}
          ></img>
        </a>
        <a href="https://www.instagram.com/hackclubindia/" target="_blank">
          <img
            src="social/instagram.png"
            sx={{
              width: [40, 46, 50, 64],
              height: [40, 46, 50, 64],
              mx: [2, 3]
            }}
            onClick={() =>
              open(`https://www.instagram.com/hackclubindia/`, '_blank')
            }
          ></img>
        </a>
        <a href="https://twitter.com/HackClubIndia" target="_blank">
          <img
            src="social/twitter.png"
            sx={{
              width: [40, 46, 50, 64],
              height: [40, 46, 50, 64],
              mx: [2, 3]
            }}
            onClick={() => open(`https://twitter.com/HackClubIndia`, '_blank')}
          ></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w"
          target="_blank"
        >
          <img
            src="social/youtube.png"
            sx={{
              width: [40, 46, 50, 64],
              height: [40, 46, 50, 64],
              mx: [2, 3]
            }}
            onClick={() =>
              open(
                `https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w`,
                '_blank'
              )
            }
          ></img>
        </a>
      </div>
    </Grid>
  </div>
)

/**functions to open social media handles and other pages*/

const open = (url, mode) => window.open(url, mode ? mode : '_self')
