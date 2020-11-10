import styled, { css, keyframes } from 'styled-components'

import { StyledGatsbyButtonProps } from './GatsbyButton.types'

const stripeAnimationSmall = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 32px 64px;
  }
`

const stripeAnimationRegular = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 64px 128px;
  }
`

export const StyledGatsbyButton = styled.button<StyledGatsbyButtonProps>`
  ${({ theme, isSmall }) => css`
    background-color: ${theme.palette.primary.main};
    background-size: ${isSmall ? '32px 32px' : '64px 64px'};
    border: none;
    border-radius: ${theme.spacing(4)};
    box-shadow: ${theme.shadowing(2)};
    color: ${theme.palette.primary.contrastText};
    cursor: pointer;
    font-size: ${isSmall ? '1.75rem' : '2.5rem'};
    height: ${isSmall ? '40px' : '60px'};
    outline: none;
    width: ${isSmall ? '200px' : '300px'};
    &:focus,
    &:active {
      box-shadow: 0 0 0 ${isSmall ? '2px' : '3px'} ${theme.palette.secondary.light};
    }

    ${theme.mediaQueries.tablet} {
      &:hover {
        animation: ${isSmall ? stripeAnimationSmall : stripeAnimationRegular} 2.8s linear infinite;
        background-image: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.1) 25%,
          transparent 25%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 50%,
          rgba(0, 0, 0, 0.1) 75%,
          transparent 75%,
          transparent
        );
      }
    }
  `}
`
