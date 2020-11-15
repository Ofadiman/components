import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { AutoscrollList } from './AutoscrollList.component'

describe('AutoscrollList component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(<AutoscrollList />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-hKgILt fMLeit"
        >
          <button
            class="sc-gsTCUz ioeTVy"
          >
            Add a message
          </button>
          <ul
            class="sc-dlfnbm jEvZlX"
          >
            <li
              class="sc-bdfBwQ evGJjf"
              id="0"
            >
              Your random number is #0.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="1"
            >
              Your random number is #1.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="2"
            >
              Your random number is #2.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="3"
            >
              Your random number is #3.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="4"
            >
              Your random number is #4.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="5"
            >
              Your random number is #5.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="6"
            >
              Your random number is #6.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="7"
            >
              Your random number is #7.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="8"
            >
              Your random number is #8.
            </li>
            <li
              class="sc-bdfBwQ evGJjf"
              id="9"
            >
              Your random number is #9.
            </li>
          </ul>
        </div>
      </DocumentFragment>
    `)
  })
})
