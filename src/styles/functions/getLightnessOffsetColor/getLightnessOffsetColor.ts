export const getLightnessOffsetColor = (hslColor: string, lightnessOffsetFactor: number): string => {
  const matchResult = hslColor.match(/\d{1,3}/gu)

  if (matchResult === null) {
    throw new Error('Please provide a valid hsl color!')
  }

  const [hue, saturation, lightness] = matchResult

  if (!hue || !saturation || !lightness) {
    throw new Error('Please provide a valid hsl color!')
  }

  const lightnessAsInteger = Number.parseInt(lightness, 10)
  const modifiedLightness = lightnessAsInteger + lightnessOffsetFactor

  return `hsl(${hue}, ${saturation}%, ${modifiedLightness}%)`
}
