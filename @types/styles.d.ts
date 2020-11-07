declare interface CreateThemeOptions {
  borderFactor: number
  name: string
  paletteOptions: CreatePaletteOptions
  spacingFactor: number
}

declare interface CreatePaletteOptions {
  danger: string
  dangerContrastText: string
  info: string
  infoContrastText: string
  lightnessOffset: number
  primary: string
  primaryContrastText: string
  secondary: string
  secondaryContrastText: string
  success: string
  successContrastText: string
  warning: string
  warningContrastText: string
}

declare interface Palette {
  danger: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
  info: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
  primary: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
  secondary: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
  success: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
  warning: {
    contrastText: string
    dark: string
    light: string
    main: string
  }
}

declare interface ZIndex {
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

declare interface MediaQueries {
  desktop: string
  tablet: string
}

declare interface Typography {
  body: FlattenSimpleInterpolation
  button: FlattenSimpleInterpolation
  caption: FlattenSimpleInterpolation
  h1: FlattenSimpleInterpolation
  h2: FlattenSimpleInterpolation
  h3: FlattenSimpleInterpolation
  h4: FlattenSimpleInterpolation
  h5: FlattenSimpleInterpolation
  h6: FlattenSimpleInterpolation
  subtitle: FlattenSimpleInterpolation
}

declare type BorderingFunction = (bordering: number) => string
declare type ShadowingFunction = (shadowing: number) => string
declare type SpacingFunction = (spacing: number) => string
