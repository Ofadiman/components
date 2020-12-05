import { makeStyles } from '@material-ui/core/styles'

export const useGlobalStyle = makeStyles(() => ({
  '@global': {
    '*, *::before, *::after': {
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      boxSizing: 'border-box',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '62.5%',
      margin: 0,
      padding: 0
    }
  }
}))
