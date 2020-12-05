import { makeStyles } from '@material-ui/core/styles'

export const useSpinnerStyles = makeStyles(
  () => ({
    '@keyframes spinnerAnimation': {
      from: {
        transform: 'rotate(0)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    arm: {
      '&:nth-child(1)': {
        animation: '$spinnerAnimation 2s ease-in-out infinite',
        borderColor: '#99ff33'
      },
      '&:nth-child(2)': {
        animation: '$spinnerAnimation 2.5s ease-in-out infinite',
        borderColor: '#9933ff'
      },
      '&:nth-child(3)': {
        animation: '$spinnerAnimation 3s ease-in-out infinite',
        borderColor: '#cc99ff'
      },
      borderRadius: '50%',
      boxSizing: 'border-box',
      height: '100%',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    large: {
      '& > div': {
        borderTop: '25px solid'
      },
      height: '250px',
      width: '250px'
    },
    medium: {
      '& > div': {
        borderTop: '15px solid'
      },
      height: '150px',
      width: '150px'
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
    small: {
      '& > div': {
        borderTop: '5px solid'
      },
      height: '50px',
      width: '50px'
    }
  }),
  {
    name: 'Spinner'
  }
)
