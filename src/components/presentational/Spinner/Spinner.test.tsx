import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { Spinner } from './Spinner'
import { spinnerStoryProps } from './Spinner.props'

describe('Spinner component', () => {
  spinnerStoryProps.forEach(({ title, ...props }) => {
    test(`match snapshot for ${title}`, () => {
      const { asFragment } = renderComponent(<Spinner {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
