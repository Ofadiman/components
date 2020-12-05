import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { ${pv(componentConst.vars.name)} } from './${pv(componentConst.vars.name)}'
import { ${pv(componentConst.vars.name, ['camelCase'])}StoryProps } from './${pv(componentConst.vars.name)}.props'

describe('${pv(componentConst.vars.name)} component', () => {
  ${pv(componentConst.vars.name, ['camelCase'])}StoryProps.forEach(({ title, ...props }) => {
    test(\`match snapshot for $\{title}\`, () => {
      const { asFragment } = renderComponent(<${pv(componentConst.vars.name)} {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
`
