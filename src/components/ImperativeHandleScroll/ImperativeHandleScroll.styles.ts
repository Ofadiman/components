import styled, { css } from 'styled-components'

export const StyledLogTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    padding: ${theme.spacing(1)};
  `}
`

export const StyledLogMessage = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacing(1)};
  `}
`

export const StyledLog = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(2)};
    box-shadow: ${theme.shadowing(1)};
    margin: ${theme.spacing(5)};
    padding: ${theme.spacing(2)};
  `}
`

export const StyledLogDisplay = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(5)};
    box-shadow: ${theme.shadowing(2)};
    height: 250px;
    margin: ${theme.spacing(5)} 0;
    overflow-y: auto;
  `}
`

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 3px solid ${theme.palette.primary.light};
    border-radius: ${theme.bordering(5)};
    color: ${theme.palette.primary.light};
    cursor: pointer;
    outline: none;
    padding: ${theme.spacing(5)};
    text-transform: uppercase;

    &:hover {
      border-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.dark};
    }
  `}
`

export const StyledImperativeHandleScroll = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(5)};

    ${StyledButton}:nth-child(2) {
      margin-left: ${theme.spacing(3)};
    }
  `}
`
