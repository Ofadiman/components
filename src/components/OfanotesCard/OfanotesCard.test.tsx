import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { OfanotesCard } from './OfanotesCard.component'

describe('OfanotesCard component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(
      <OfanotesCard
        buttonText={'Red alert, beauty!'}
        description={'Tremble without vision, and we won’t translate a girl.'}
        icons={[]}
        image={'img'}
        onActionButtonClick={jest.fn()}
      />
    )

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-eCssSg ciQdor"
        >
          <div
            class="sc-hKgILt fybAOy"
          />
          <div
            class="sc-dlfnbm fmNTSP"
          >
            <p>
              Tremble without vision, and we won’t translate a girl.
            </p>
            <button
              class="sc-bdfBwQ hLeoZg"
            >
              Red alert, beauty!
            </button>
          </div>
          <footer
            class="sc-gsTCUz hejeof"
          />
        </div>
      </DocumentFragment>
    `)
  })
})
