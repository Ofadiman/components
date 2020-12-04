import './index.css'

import { MuiThemeProvider, Typography } from '@material-ui/core'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { theme } from './styles/theme'

ReactDOM.render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <Typography>{'react app'}</Typography>
    </MuiThemeProvider>
  </StrictMode>,
  document.querySelector('#root')
)
