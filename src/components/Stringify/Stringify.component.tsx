import React from 'react'

import { StyledStringify } from './Stringify.styles'
import { StringifyProps } from './Stringify.types'

export const Stringify: FC<StringifyProps> = ({ className, value, indentBy = 2 }) => (
  <StyledStringify className={className}>{JSON.stringify(value, null, indentBy)}</StyledStringify>
)
