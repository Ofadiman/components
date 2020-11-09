import styled, { css } from 'styled-components'

export const StyledStringify = styled.pre`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    border-radius: ${theme.bordering(4)};
    box-shadow: ${theme.shadowing(2)};
    color: ${theme.palette.primary.contrastText};
    font-size: 2rem;
    padding: ${theme.spacing(8)};
    width: fit-content;
  `}
`
