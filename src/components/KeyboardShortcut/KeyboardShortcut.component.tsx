import React from 'react'

import { StyledAlt, StyledCtrl, StyledKey, StyledKeyboardShortcut, StyledShift } from './KeyboardShortcut.styles'
import { KeyboardShortcutProps } from './KeyboardShortcut.types'

export const KeyboardShortcut: FC<KeyboardShortcutProps> = ({ className, hasAlt, hasCtrl, actualKey, hasShift }) => (
  <StyledKeyboardShortcut className={className}>
    {hasCtrl && <StyledCtrl>{'Ctrl'}</StyledCtrl>}
    {hasAlt && <StyledAlt>{'Alt'}</StyledAlt>}
    {hasShift && <StyledShift>{'Shift'}</StyledShift>}
    <StyledKey>{actualKey}</StyledKey>
  </StyledKeyboardShortcut>
)
