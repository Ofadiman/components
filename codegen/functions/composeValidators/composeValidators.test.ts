import { composeValidators } from './composeValidators'

describe('composeValidators function', () => {
  const firstValidatorMock = jest.fn()
  const secondValidatorMock = jest.fn()
  const thirdValidatorMock = jest.fn()
  const firstErrorMessage = 'firstErrorMessage'
  const secondErrorMessage = 'secondErrorMessage'
  const promptValue = 'promptValue'

  it('should call every validator function', () => {
    composeValidators(firstValidatorMock, secondValidatorMock, thirdValidatorMock)(promptValue)

    expect(firstValidatorMock).toHaveBeenCalledTimes(1)
    expect(secondValidatorMock).toHaveBeenCalledTimes(1)
    expect(thirdValidatorMock).toHaveBeenCalledTimes(1)
  })

  it('should return first error message', () => {
    firstValidatorMock.mockImplementationOnce(() => null)
    secondValidatorMock.mockImplementationOnce(() => firstErrorMessage)
    thirdValidatorMock.mockImplementationOnce(() => secondErrorMessage)

    const result = composeValidators(firstValidatorMock, secondValidatorMock, thirdValidatorMock)(promptValue)

    expect(result).toEqual(firstErrorMessage)
  })

  it('should return `true` when all validators pass', () => {
    firstValidatorMock.mockImplementationOnce(() => null)
    secondValidatorMock.mockImplementationOnce(() => null)
    thirdValidatorMock.mockImplementationOnce(() => null)

    const result = composeValidators(firstValidatorMock, secondValidatorMock, thirdValidatorMock)(promptValue)

    expect(result).toEqual(true)
  })
})
