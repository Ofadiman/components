export const composeValidators = (...validatorFunctions: ((promptValue: string) => null | string)[]) => (
  promptValue: string
): boolean | string => {
  const validationErrors: string[] = []

  validatorFunctions.forEach((validatorFunction) => {
    const validationResult = validatorFunction(promptValue)

    if (validationResult) {
      validationErrors.push(validationResult)
    }
  })

  return validationErrors.length === 0 ? true : validationErrors[0]
}
