import { TypographyOptions } from '@material-ui/core/styles/createTypography'

/**
 * @description
 * Override MaterialUI's typography.
 *
 * @example
 * const theme = createMuiTheme({ typography })
 */
export const typography: TypographyOptions = {
  body1: { fontSize: '16px' },
  body2: { fontSize: '16px', fontWeight: 'bold' },
  button: { fontSize: '22px', fontWeight: 'bold', lineHeight: 1, textTransform: 'none' },
  caption: { fontSize: '14px', textDecoration: 'underline' },
  fontFamily: ['Cabin', 'sans-serif'].join(),
  h1: { fontSize: '30px', fontWeight: 500 },
  h2: { fontSize: '24px', fontWeight: 500 },
  h3: { fontSize: '22px', fontWeight: 'bold', paddingBottom: '8px' },
  h4: { fontSize: '22px', fontWeight: 500 },
  h5: { fontSize: '22px', fontWeight: 'normal' },
  h6: { fontSize: '20px', fontWeight: 500 },
  subtitle1: { fontSize: '14px' }
}
