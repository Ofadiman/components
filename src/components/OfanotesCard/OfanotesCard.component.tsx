import React from 'react'

import {
  StyledOfanotesCard,
  StyledOfanotesCardBody,
  StyledOfanotesCardButton,
  StyledOfanotesCardFooter,
  StyledOfanotesCardImage
} from './OfanotesCard.styles'
import { OfanotesCardProps } from './OfanotesCard.types'

export const OfanotesCard: FC<OfanotesCardProps> = ({ className, buttonText, description, icons, image }) => {
  return (
    <StyledOfanotesCard className={className}>
      <StyledOfanotesCardImage image={image} />
      <StyledOfanotesCardBody>
        <p>{description}</p>
        <StyledOfanotesCardButton>{buttonText}</StyledOfanotesCardButton>
      </StyledOfanotesCardBody>
      <StyledOfanotesCardFooter>
        {icons.map((Icon) => (
          <Icon key={Icon.displayName} />
        ))}
      </StyledOfanotesCardFooter>
    </StyledOfanotesCard>
  )
}
