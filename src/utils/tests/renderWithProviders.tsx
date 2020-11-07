import { render, RenderResult } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../styles/themes/default.theme'

export const renderWithProviders = (ui: ReactElement): RenderResult => {
  const Wrapper: FC = ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>

  return { ...render(ui, { wrapper: Wrapper }) }
}
