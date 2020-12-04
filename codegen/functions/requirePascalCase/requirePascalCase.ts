import { PlopValidator } from '../../types/PlopValidator.type'

const pascalCaseRegex = /^[A-Z][A-Za-z]*$/u

export const requirePascalCase = (errorMessage: string): PlopValidator => (promptValue: string): null | string =>
  pascalCaseRegex.test(promptValue) ? null : errorMessage
