import React from 'react'

import { renderWithProviders } from '../../utils/tests/renderWithProviders'
import { TripleArmSpinner } from './TripleArmSpinner.component'

describe('TripleArmSpinner component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderWithProviders(<TripleArmSpinner />)

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
