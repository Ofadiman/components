import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { GatsbyButton } from './GatsbyButton'
import { gatsbyButtonStoryProps } from './GatsbyButton.props'

describe('GatsbyButton component', () => {
  gatsbyButtonStoryProps.forEach(({ title, ...props }) => {
    test(`match snapshot for ${title}`, () => {
      const { asFragment } = renderComponent(<GatsbyButton {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
