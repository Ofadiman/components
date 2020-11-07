import { createGlobalStyle } from 'styled-components'

import { createTypography } from './creators/createTypography'

const typography = createTypography()

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    font-family: Roboto, sans-serif;
  }
  
  body {
    ${typography.body};
  }
  
  h1 {
    ${typography.h1};
  }
  
  h2 {
    ${typography.h2};
  }
  
  h3 {
    ${typography.h3};
  }
  
  h4 {
    ${typography.h4};
  }
  
  h5 {
    ${typography.h5};
  }
  
  h6 {
    ${typography.h6};
  }
  
  button {
    ${typography.button}
  }
`
