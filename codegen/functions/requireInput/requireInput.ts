import { PlopValidator } from '../../types/PlopValidator.type'

const anyStringRegex = /.+/u

export const requireInput = (errorMessage: string): PlopValidator => (promptValue: string): null | string =>
  anyStringRegex.test(promptValue) ? null : errorMessage
