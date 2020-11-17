import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { KeyboardShortcut } from './KeyboardShortcut.component'

describe('KeyboardShortcut component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(
      <KeyboardShortcut actualKey={'C'} hasAlt={true} hasCtrl={true} hasShift={true} />
    )

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-eCssSg fIWuIz"
        >
          <span
            class="sc-bdfBwQ sc-dlfnbm ijKiRn eHwNBT"
          >
            Ctrl
          </span>
          <span
            class="sc-bdfBwQ sc-hKgILt ijKiRn enDVDU"
          >
            Alt
          </span>
          <span
            class="sc-bdfBwQ sc-gsTCUz ijKiRn caHZEe"
          >
            Shift
          </span>
          <span
            class="sc-bdfBwQ ijKiRn"
          >
            C
          </span>
        </div>
      </DocumentFragment>
    `)
  })
})
