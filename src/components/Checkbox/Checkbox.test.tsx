import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { Checkbox } from './Checkbox.component'

describe('Checkbox component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(<Checkbox inputId={'checkbox'} onChange={jest.fn()} />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-dlfnbm gxRMKZ"
        >
          <input
            class="sc-gsTCUz cqeGta"
            id="checkbox"
            type="checkbox"
          />
          <svg
            class="sc-bdfBwQ cWxTEy"
            viewBox="0 0 24 24"
          >
            <polyline
              points="20 6 9 17 4 12"
            />
          </svg>
        </div>
      </DocumentFragment>
    `)
  })
})
