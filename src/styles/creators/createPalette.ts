import { getLightnessOffsetColor } from '../functions/getLightnessOffsetColor/getLightnessOffsetColor'

export const createPalette = (createPaletteOptions: CreatePaletteOptions): Palette => {
  return {
    danger: {
      contrastText: createPaletteOptions.dangerContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.danger, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.danger, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.danger
    },
    info: {
      contrastText: createPaletteOptions.infoContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.info, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.info, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.info
    },
    primary: {
      contrastText: createPaletteOptions.primaryContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.primary, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.primary, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.primary
    },
    secondary: {
      contrastText: createPaletteOptions.secondaryContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.secondary, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.secondary, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.secondary
    },
    success: {
      contrastText: createPaletteOptions.successContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.success, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.success, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.success
    },
    warning: {
      contrastText: createPaletteOptions.warningContrastText,
      dark: getLightnessOffsetColor(createPaletteOptions.warning, -createPaletteOptions.lightnessOffset),
      light: getLightnessOffsetColor(createPaletteOptions.warning, createPaletteOptions.lightnessOffset),
      main: createPaletteOptions.warning
    }
  }
}
