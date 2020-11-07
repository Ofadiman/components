import { DefaultTheme } from 'styled-components'

import { createTheme } from '../creators/createTheme'

export const defaultTheme: DefaultTheme = createTheme({
  borderFactor: 4,
  name: `default`,
  paletteOptions: {
    danger: `hsl(4, 78%, 58%)`,
    dangerContrastText: `hsl(0, 0%, 100%)`,
    info: `hsl(207, 86%, 54%)`,
    infoContrastText: `hsl(0, 0%, 100%)`,
    lightnessOffset: 10,
    primary: `hsl(272, 100%, 50%)`,
    primaryContrastText: `hsl(0, 0%, 100%)`,
    secondary: `hsl(22, 100%, 50%)`,
    secondaryContrastText: `hsl(0, 0%, 100%)`,
    success: `hsl(122, 57%, 49%)`,
    successContrastText: `hsl(0, 0%, 100%)`,
    warning: `hsl(49, 100%, 50%)`,
    warningContrastText: `hsl(0, 0%, 100%)`
  },
  spacingFactor: 4
})
