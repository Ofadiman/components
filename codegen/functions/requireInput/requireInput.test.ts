import { requireInput } from './requireInput'

describe('requireInput function', () => {
  const errorMessage = 'input cannot be empty'

  it('should return `null` when called with non empty string', () => {
    const result = requireInput(errorMessage)('valid string')

    expect(result).toBeNull()
  })

  it('should return error message when called with empty string', () => {
    const result = requireInput(errorMessage)('')

    expect(result).toEqual(errorMessage)
  })
})
