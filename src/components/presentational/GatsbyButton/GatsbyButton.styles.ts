import { makeStyles } from '@material-ui/core/styles'

export const useGatsbyButtonStyles = makeStyles(
  () => ({
    '@keyframes stripe-animation-medium': {
      from: {
        backgroundPosition: '0 0'
      },
      to: {
        backgroundPosition: '64px 128px'
      }
    },
    '@keyframes stripe-animation-small': {
      from: {
        backgroundPosition: '0 0'
      },
      to: {
        backgroundPosition: '32px 64px'
      }
    },
    medium: {
      '&:focus': {
        boxShadow: '0 0 0 3px hsl(270, 100%, 80%)'
      },
      '&:hover': {
        animation: '$stripe-animation-medium 2.8s linear infinite',
        backgroundSize: '64px 64px'
      },
      borderRadius: 18,
      fontSize: '3rem',
      height: 60,
      width: 300
    },
    root: {
      backgroundColor: 'hsl(270, 100%, 60%)',
      backgroundImage: `linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.1) 25%,
          transparent 25%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 50%,
          rgba(0, 0, 0, 0.1) 75%,
          transparent 75%,
          transparent
        );`,
      backgroundSize: '0 0',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      outline: 'none'
    },
    small: {
      '&:focus': {
        boxShadow: '0 0 0 2px hsl(270, 100%, 80%)'
      },
      '&:hover': {
        animation: '$stripe-animation-small 2.8s linear infinite',
        backgroundSize: '32px 32px'
      },
      borderRadius: 12,
      fontSize: '2rem',
      height: 40,
      width: 200
    }
  }),
  {
    name: 'GatsbyButton'
  }
)
