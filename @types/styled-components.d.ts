import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bordering: BorderingFunction
    mediaQueries: MediaQueries
    name: string
    palette: Palette
    shadowing: ShadowingFunction
    spacing: SpacingFunction
    typography: Typography
    zIndex: ZIndex
  }
}
