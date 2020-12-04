import { ph } from '../../const/ph'

export const pv = (variable: string, helpers?: (keyof typeof ph)[]): string => {
  if (!helpers) {
    return `{{ ${variable} }}`
  }

  const reducedHelpers = helpers.reduce((accumulator, helper, index) => {
    if (index === 0) {
      return `${helper} ${accumulator}`
    }

    return `${helper} ( ${accumulator} )`
  }, variable)

  return `{{ ${reducedHelpers} }}`
}
