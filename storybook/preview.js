import centered from '@storybook/addon-centered/react'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { defaultTheme } from '../src/styles/themes/default.theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator(withThemesProvider([defaultTheme]))
addDecorator(centered)

/**
 * Add global style from styled components to every story.
 */
addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
))
