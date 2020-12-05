import { storiesOf } from '@storybook/react'
import React from 'react'

import { Spinner } from './Spinner'
import { spinnerStoryProps } from './Spinner.props'

const clientApi = storiesOf('Components/Presentational/Spinner', module)

spinnerStoryProps.forEach(({ title, ...props }) => {
  clientApi.add(title, () => <Spinner {...props} />)
})
