import theme from '@hackclub/theme'

const base = {
  ...theme,
  useLocalStorage: false,
  containerspec: {
    ml: [3, 5]
  },
  headerspec: {
    fontSize: [5, 6],
    width: ['90vw', '80vw'],
    my: 0
  },
  paraspec: {
    fontSize: 3,
    width: ['80vw']
  },
  imageh1: {
    mx: 4,
    fontSize: 4,
    textShadow: '1px 1px 5px black'
  },
  imageinfo: {
    mt: 3,
    fontSize: 3,
    a: { color: 'blue' }
  }
}

/**Disable dark mode */
base.useColorSchemeMediaQuery = false
base.colors.modes = {}

export default base
