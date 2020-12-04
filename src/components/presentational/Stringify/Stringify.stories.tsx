import { storiesOf } from '@storybook/react'
import React from 'react'

import { Stringify } from './Stringify'
import { stringifyStoryProps } from './Stringify.const'

const clientApi = storiesOf('Components/Presentational/Stringify', module)

stringifyStoryProps.forEach(({ title, ...props }) => {
  clientApi.add(title, () => <Stringify {...props} />)
})
