import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { ImperativeHandleScroll } from './ImperativeHandleScroll.component'

describe('ImperativeHandleScroll component', () => {
  it('should handle scroll to top and bottom', () => {
    renderComponent(<ImperativeHandleScroll />)

    const logDisplay = screen.getByRole('log')
    const scrollTopSetterMock = jest.fn()
    const scrollToBottomButton = screen.getByRole('button', { name: /scroll to bottom/iu })
    const scrollToTopButton = screen.getByRole('button', { name: /scroll to top/iu })

    Object.defineProperties(logDisplay, {
      scrollHeight: {
        get() {
          return 100
        }
      },
      scrollTop: {
        get() {
          return 0
        },
        set: scrollTopSetterMock
      }
    })

    userEvent.click(scrollToBottomButton)

    expect(scrollTopSetterMock).toHaveBeenCalledTimes(1)
    expect(scrollTopSetterMock).toHaveBeenCalledWith(100)

    scrollTopSetterMock.mockReset()

    userEvent.click(scrollToTopButton)

    expect(scrollTopSetterMock).toHaveBeenCalledTimes(1)
    expect(scrollTopSetterMock).toHaveBeenCalledWith(0)
  })

  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(<ImperativeHandleScroll />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-jSgupP jOdZqf"
        >
          <button
            class="sc-eCssSg jiPffq"
          >
            Scroll to bottom
          </button>
          <button
            class="sc-eCssSg jiPffq"
          >
            Scroll to top
          </button>
          <div
            class="sc-hKgILt kBIgih"
            role="log"
          >
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 0
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 0
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 1
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 1
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 2
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 2
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 3
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 3
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 4
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 4
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 5
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 5
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 6
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 6
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 7
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 7
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 8
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 8
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 9
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 9
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 10
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 10
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 11
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 11
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 12
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 12
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 13
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 13
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 14
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 14
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 15
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 15
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 16
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 16
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 17
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 17
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 18
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 18
              </p>
            </div>
            <div
              class="sc-dlfnbm HzjBg"
            >
              <h3
                class="sc-bdfBwQ iXhLtQ"
              >
                title - 19
              </h3>
              <p
                class="sc-gsTCUz gIgFJr"
              >
                message - 19
              </p>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
