export const createSpacing = (spacingFactor: number): SpacingFunction => (spacing: number): string => {
  if (spacing < 0) {
    throw new Error(`"spacing" cannot be below 0!`)
  }

  if (!Number.isInteger(spacing)) {
    throw new TypeError(`"spacing" must be an integer!`)
  }

  const space = spacing * spacingFactor

  return `${space}px`
}
