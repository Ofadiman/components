import React from 'react'

import { StyledTripleArmSpinner } from './TripleArmSpinner.styles'
import { TripleArmSpinnerProps } from './TripleArmSpinner.types'

export const TripleArmSpinner: FC<TripleArmSpinnerProps> = ({ className, isSmall }) => (
  <StyledTripleArmSpinner className={className} isSmall={isSmall}>
    <div />
    <div />
    <div />
  </StyledTripleArmSpinner>
)
