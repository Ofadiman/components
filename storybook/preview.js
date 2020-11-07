import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

import { defaultTheme } from '../src/styles/themes/default.theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator(withThemesProvider([defaultTheme]))
