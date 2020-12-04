import { requirePascalCase } from './requirePascalCase'

describe('requirePascalCase function', () => {
  const errorMessage = 'invalid string'
  const cases = [
    { expectedResult: null, string: 'PascalCaseString' },
    { expectedResult: errorMessage, string: 'kebab-case-string' },
    { expectedResult: errorMessage, string: 'snake_case_string' },
    { expectedResult: errorMessage, string: 'camelCaseString' },
    { expectedResult: errorMessage, string: 'numbers11984' }
  ]

  cases.forEach(({ expectedResult, string }) => {
    test(`return ${String(expectedResult)} for ${string} string`, () => {
      const result = requirePascalCase(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
