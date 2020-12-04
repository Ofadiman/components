import { render } from '@testing-library/react'
import React, { FC } from 'react'

import { renderComponent, Wrapper } from './renderComponent'

jest.mock('@testing-library/react', () => ({
  render: jest.fn()
}))

describe('renderComponent function', () => {
  const Component: FC = () => <div>{'UI'}</div>

  it('should render component', () => {
    renderComponent(<Component />)

    expect(render).toHaveBeenCalledWith(<Component />, { wrapper: Wrapper })
  })
})
