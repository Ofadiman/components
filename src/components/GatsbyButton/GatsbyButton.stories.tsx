import { storiesOf } from '@storybook/react'
import React from 'react'

import { storybookLog } from '../../utils/functions/storybookLog/storybookLog.function'
import { GatsbyButton } from './GatsbyButton.component'

storiesOf('GatsbyButton', module)
  .add('Default', () => <GatsbyButton onClick={storybookLog('Regular button click')}>{'Regular button'}</GatsbyButton>)
  .add('Small', () => (
    <GatsbyButton isSmall={true} onClick={storybookLog('Small button click')}>
      {'Small button'}
    </GatsbyButton>
  ))
