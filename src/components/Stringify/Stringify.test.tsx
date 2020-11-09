import React from 'react'

import { renderComponent } from '../../utils/functions/renderComponent/renderComponent'
import { Stringify } from './Stringify.component'

describe('Stringify component', () => {
  it('should match inline snapshot', () => {
    const { asFragment } = renderComponent(
      <>
        <Stringify value={null} />
        <Stringify value={'String'} />
        <Stringify value={19872} />
        <Stringify value={{ foo: { bar: 1 } }} />
        <Stringify value={[1, undefined, null, 'string', { foo: 1 }]} />
      </>
    )

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <pre
          class="sc-bdfBwQ fEZQJU"
        >
          null
        </pre>
        <pre
          class="sc-bdfBwQ fEZQJU"
        >
          "String"
        </pre>
        <pre
          class="sc-bdfBwQ fEZQJU"
        >
          19872
        </pre>
        <pre
          class="sc-bdfBwQ fEZQJU"
        >
          {
        "foo": {
          "bar": 1
        }
      }
        </pre>
        <pre
          class="sc-bdfBwQ fEZQJU"
        >
          [
        1,
        null,
        null,
        "string",
        {
          "foo": 1
        }
      ]
        </pre>
      </DocumentFragment>
    `)
  })
})
