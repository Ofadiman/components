import { Component } from '../component.const'

export const template = `
import React from 'react'

import { renderWithProviders } from '../../utils/tests/renderWithProviders'
import { {{ ${Component.Vars.Name} }} } from './{{ ${Component.Vars.Name} }}.component'

describe(\`{{ ${Component.Vars.Name} }} component\`, () => {
  it(\`should match inline snapshot\`, () => {
    const { asFragment } = renderWithProviders(<{{ ${Component.Vars.Name} }} />)

    expect(asFragment()).toMatchInlineSnapshot()
  })
})
`
