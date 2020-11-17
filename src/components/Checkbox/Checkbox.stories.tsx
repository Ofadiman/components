import { storiesOf } from '@storybook/react'
import React from 'react'

import { storybookLog } from '../../utils/functions/storybookLog/storybookLog'
import { Checkbox } from './Checkbox.component'

storiesOf('Checkbox', module).add('Default', () => <Checkbox inputId={'checkbox'} onChange={storybookLog('works')} />)
