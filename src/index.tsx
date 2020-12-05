import './index.css'

import { MuiThemeProvider } from '@material-ui/core'
import React, { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom'

import { theme } from './styles/theme'

const Index = (): JSX.Element => {
  const [isToggled, setIsToggled] = useState(true)

  return (
    <StrictMode>
      <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexFlow: 'column', height: '100vh' }}>
          <header
            style={{ alignItems: 'center', display: 'flex', height: 64, justifyContent: 'center', minHeight: 64 }}
          >
            <button
              onClick={() => {
                setIsToggled((prevIsToggled) => !prevIsToggled)
              }}
              type={'button'}
            >
              {'toggle layout'}
            </button>
          </header>
          <main style={{ display: 'flex', flexFlow: 'column', flexGrow: 1 }}>
            {isToggled ? (
              <>
                <div style={{ backgroundColor: 'red', height: 500 }}>{'content #1'}</div>
                <div style={{ backgroundColor: 'blue', height: 500 }}>{'content #2'}</div>
                <div style={{ backgroundColor: 'violet', height: 500 }}>{'content #3'}</div>
                <div style={{ backgroundColor: 'yellow', height: 500 }}>{'content #4'}</div>
              </>
            ) : (
              <div style={{ backgroundColor: 'darkviolet', height: 100, margin: 'auto auto', width: 100 }} />
            )}
          </main>
          <footer
            style={{ alignItems: 'center', display: 'flex', height: 100, justifyContent: 'center', minHeight: 100 }}
          >
            <p>{'footer'}</p>
          </footer>
        </div>
      </MuiThemeProvider>
    </StrictMode>
  )
}

ReactDOM.render(<Index />, document.querySelector('#root'))
