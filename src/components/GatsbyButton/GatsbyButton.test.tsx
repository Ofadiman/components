import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { GatsbyButton } from './GatsbyButton.component'

describe('GatsbyButton component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(<GatsbyButton onClick={jest.fn()}>{'GatsbyButton'}</GatsbyButton>)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="sc-bdfBwQ hURsAT"
        >
          GatsbyButton
        </button>
      </DocumentFragment>
    `)
  })
})
