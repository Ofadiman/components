import { composePlopVariable, PlopHelpers } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const camelCaseName = composePlopVariable(componentConst.vars.name, [PlopHelpers.CamelCase])
const name = composePlopVariable(componentConst.vars.name)

export const template = `
import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { ${name} } from './${name}'
import { ${camelCaseName}StoryProps } from './${name}.props'

describe('${name} component', () => {
  ${camelCaseName}StoryProps.forEach(({ title, ...props }) => {
    test(\`match snapshot for $\{title}\`, () => {
      const { asFragment } = renderComponent(<${name} {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
`
