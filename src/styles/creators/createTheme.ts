import { DefaultTheme } from 'styled-components'

import { createBordering } from './createBordering'
import { createMediaQueries } from './createMediaQueries'
import { createPalette } from './createPalette'
import { createShadowing } from './createShadowing'
import { createSpacing } from './createSpacing'
import { createTypography } from './createTypography'
import { createZIndex } from './createZIndex'

export const createTheme = (createThemeOptions: CreateThemeOptions): DefaultTheme => ({
  bordering: createBordering(createThemeOptions.borderFactor),
  mediaQueries: createMediaQueries(),
  name: createThemeOptions.name,
  palette: createPalette(createThemeOptions.paletteOptions),
  shadowing: createShadowing(),
  spacing: createSpacing(createThemeOptions.spacingFactor),
  typography: createTypography(),
  zIndex: createZIndex()
})
