import '../src/index.css'

import { MuiThemeProvider } from '@material-ui/core'
import { addDecorator } from '@storybook/react'
import React from 'react'

import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      fullHeight: {
        name: 'fullHeight',
        styles: {
          width: '100%',
          height: '100%'
        }
      }
    }
  }
}

addDecorator((Story) => (
  <MuiThemeProvider theme={theme}>
    <Story />
  </MuiThemeProvider>
))
