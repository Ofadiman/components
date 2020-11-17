import styled, { css } from 'styled-components'

export const StyledKey = styled.span`
  ${({ theme }) => css`
    ${theme.typography.button}
    background-color: hsl(0, 0%, 13%);
    border-radius: 10px;
    box-shadow: 0 0 2px black;
    color: hsl(0, 0%, 67%);
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: capitalize;
    width: 50px;
  `}
`

export const StyledShift = styled(StyledKey)`
  width: 100px;
`

export const StyledCtrl = styled(StyledKey)`
  width: 70px;
`

export const StyledAlt = styled(StyledKey)`
  width: 60px;
`

export const StyledKeyboardShortcut = styled.div`
  display: flex;

  ${StyledKey} {
    margin: 0 4px 0 0;
  }
`
