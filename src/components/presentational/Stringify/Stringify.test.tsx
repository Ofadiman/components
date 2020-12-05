import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { Stringify } from './Stringify'
import { stringifyStoryProps } from './Stringify.props'

describe('Stringify component', () => {
  stringifyStoryProps.forEach(({ title, ...props }) => {
    test(`match snapshot for ${title}`, () => {
      const { asFragment } = renderComponent(<Stringify {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
