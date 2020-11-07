import { Component } from '../component.const'

export const template = `
import React from 'react'

import { renderWithProviders } from '../../utils/tests/renderWithProviders'
import { {{ ${Component.Name} }} } from './{{ ${Component.Name} }}.component'

describe(\`{{ ${Component.Name} }} component\`, () => {
  it(\`should match inline snapshot\`, () => {
    const { asFragment } = render(<{{ ${Component.Name} }} />)

    expect(asFragment()).toMatchInlineSnapshot()
  })
})
`
