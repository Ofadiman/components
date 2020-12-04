const pascalCaseRegex = /^[A-Z][A-Za-z]*$/u

export const requirePascalCase = (errorMessage: string) => (promptValue: string): null | string =>
  pascalCaseRegex.test(promptValue) ? null : errorMessage
