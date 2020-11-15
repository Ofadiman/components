import styled, { css } from 'styled-components'

export const StyledListItem = styled.li`
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: lightgray;
  }
`

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    border: none;
    border-radius: ${theme.bordering(3)};
    box-shadow: ${theme.shadowing(2)};
    color: ${theme.palette.primary.contrastText};
    cursor: pointer;
    outline: none;
    padding: ${theme.spacing(3)};

    &:hover {
      background-color: ${theme.palette.primary.light};
    }
  `}
`

export const StyledAutoscrollList = styled.ul`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(2)};
    box-shadow: ${theme.shadowing(2)};
    height: 300px;
    overflow-y: auto;
    padding: ${theme.spacing(3)};
  `}
`

export const StyledAutoscrollListWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(5)};

    ${StyledButton} {
      margin-bottom: ${theme.spacing(5)};
    }
  `}
`
