import { storiesOf } from '@storybook/react'
import React from 'react'

import { TripleArmSpinner } from './TripleArmSpinner.component'

storiesOf('TripleArmSpinner', module)
  .add('Default', () => <TripleArmSpinner />)
  .add('Small', () => <TripleArmSpinner isSmall={true} />)
