import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { ${pv(componentConst.vars.name)} } from './${pv(componentConst.vars.name)}'

describe('${pv(componentConst.vars.name)} component', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderComponent(<${pv(componentConst.vars.name)} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
`
