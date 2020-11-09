import styled, { css, keyframes } from 'styled-components'

import { StyledTripleArmSpinnerProps } from './TripleArmSpinner.types'

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledTripleArmSpinner = styled.div<StyledTripleArmSpinnerProps>`
  ${({ theme, isSmall }) => css`
    align-items: center;
    display: flex;
    height: ${isSmall ? '50px' : '200px'};
    justify-content: center;
    position: relative;
    width: ${isSmall ? '50px' : '200px'};

    & > div {
      border-radius: 50%;
      height: 100%;
      position: absolute;
      width: 100%;
    }

    & > div:nth-child(1) {
      animation: ${spinnerAnimation} 2s ease-in-out infinite;
      border-top: ${isSmall ? theme.bordering(1) : theme.bordering(4)} solid ${theme.palette.primary.main};
    }

    & > div:nth-child(2) {
      animation: ${spinnerAnimation} 2.5s linear infinite;
      border-top: ${isSmall ? theme.bordering(1) : theme.bordering(4)} solid ${theme.palette.primary.light};
    }

    & > div:nth-child(3) {
      animation: ${spinnerAnimation} 3s linear infinite;
      border-top: ${isSmall ? theme.bordering(1) : theme.bordering(4)} solid ${theme.palette.primary.dark};
    }
  `}
`
