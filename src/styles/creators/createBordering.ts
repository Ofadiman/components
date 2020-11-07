export const createBordering = (borderingFactor: number): BorderingFunction => (bordering: number): string => {
  if (bordering < 0) {
    throw new Error('"bordering" cannot be below 0!')
  }

  if (!Number.isInteger(bordering)) {
    throw new TypeError('"bordering" must be an integer!')
  }

  const border = bordering * borderingFactor

  return `${border}px`
}
