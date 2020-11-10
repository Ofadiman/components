import React from 'react'

import { StyledGatsbyButton } from './GatsbyButton.styles'
import { GatsbyButtonProps } from './GatsbyButton.types'

export const GatsbyButton: FCC<GatsbyButtonProps> = ({ onClick, className, isSmall, children }) => (
  <StyledGatsbyButton className={className} isSmall={isSmall} onClick={onClick}>
    {children}
  </StyledGatsbyButton>
)
