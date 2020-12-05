/* eslint-disable import/no-unresolved */
import { Overrides } from '@material-ui/core/styles/overrides'

/**
 * @description
 * Override MaterialUI's styles globally.
 *
 * @example
 * const theme = createMuiTheme({ overrides })
 */
export const overrides: Overrides = {
  MuiCardActions: {
    root: {
      padding: 0
    }
  },
  MuiListItem: {
    root: {
      padding: 8
    }
  },
  MuiSvgIcon: {
    fontSizeLarge: {
      fontSize: 40
    },
    fontSizeSmall: {
      fontSize: 30
    }
  }
}
