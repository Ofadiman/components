import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { TripleArmSpinner } from './TripleArmSpinner.component'

describe('TripleArmSpinner component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(<TripleArmSpinner />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-bdfBwQ fuIKbB"
        >
          <div />
          <div />
          <div />
        </div>
      </DocumentFragment>
    `)
  })
})
