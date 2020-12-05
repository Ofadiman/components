import { storiesOf } from '@storybook/react'
import React from 'react'

import { GatsbyButton } from './GatsbyButton'
import { gatsbyButtonStoryProps } from './GatsbyButton.props'

const clientApi = storiesOf('Components/Presentational/GatsbyButton', module)

gatsbyButtonStoryProps.forEach(({ title, ...props }) => {
  clientApi.add(title, () => <GatsbyButton {...props} />)
})
