import styled, { css } from 'styled-components'

export const StyledStringify = styled.pre`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(4)};
    box-shadow: ${theme.shadowing(1)};
    font-size: 2rem;
    padding: ${theme.spacing(8)};
    width: fit-content;
  `}
`
