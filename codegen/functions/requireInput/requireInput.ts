const anyStringRegex = /.+/u

export const requireInput = (errorMessage: string) => (promptValue: string): null | string =>
  anyStringRegex.test(promptValue) ? null : errorMessage
