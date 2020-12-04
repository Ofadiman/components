import { ph } from '../../const/ph'
import { pv } from './pv'

describe('pv function', () => {
  const cases = [
    { expectedResult: '{{ name }}', helpers: undefined, title: 'call "pv" without helpers', variable: 'name' },
    {
      expectedResult: `{{ ${ph.camelCase} name }}`,
      helpers: [ph.camelCase],
      title: 'call "pv" with 1 helper',
      variable: 'name'
    },
    {
      expectedResult: `{{ ${ph.dotCase} ( ${ph.pascalCase} ( ${ph.camelCase} name ) ) }}`,
      helpers: [ph.camelCase, ph.pascalCase, ph.dotCase],
      title: 'call "pv" with many helpers',
      variable: 'name'
    }
  ]

  cases.forEach(({ expectedResult, helpers, variable, title }) => {
    test(title, () => {
      const result = pv(variable, helpers)

      expect(result).toEqual(expectedResult)
    })
  })
})
