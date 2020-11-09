import { storiesOf } from '@storybook/react'
import React from 'react'

import { Stringify } from './Stringify.component'

storiesOf('Stringify', module).add('Default', () => (
  <Stringify value={[{ foo: { bar: 'buzz' } }, null, 1, 'string', ['nest', 'array']]} />
))
