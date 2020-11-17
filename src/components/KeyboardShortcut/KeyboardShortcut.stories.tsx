import { storiesOf } from '@storybook/react'
import React from 'react'

import { KeyboardShortcut } from './KeyboardShortcut.component'

storiesOf('KeyboardShortcut', module).add('Default', () => (
  <KeyboardShortcut actualKey={'C'} hasAlt={true} hasCtrl={true} hasShift={true} />
))
