import styled, { css } from 'styled-components'

import { StyledOfanotesCardImageProps } from './OfanotesCard.types'

export const StyledOfanotesCardButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    border: none;
    border-radius: ${theme.bordering(5)};
    color: ${theme.palette.primary.contrastText};
    cursor: pointer;
    min-width: 70%;
    padding: ${theme.spacing(2)};
    width: fit-content;
    &:hover {
      background-color: ${theme.palette.primary.light};
    }
  `}
`

export const StyledOfanotesCardFooter = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 ${theme.spacing(2)};
    position: relative;

    &::after {
      background-color: lightgray;
      content: '';
      height: 1px;
      position: absolute;
      top: 0;
      width: 90%;
    }

    svg {
      height: 50%;
      margin: 0 ${theme.spacing(1)};
    }
  `}
`

export const StyledOfanotesCardBody = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    padding: 0 ${theme.spacing(5)};

    p {
      text-align: center;
    }
  `}
`

export const StyledOfanotesCardImage = styled.div<StyledOfanotesCardImageProps>`
  ${({ theme, image }) => css`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: ${theme.bordering(5)};
    border-top-right-radius: ${theme.bordering(5)};
    width: 100%;
  `}
`

export const StyledOfanotesCard = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(5)};
    box-shadow: 0 0 10px lightgray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 5fr 1fr;
    height: 500px;
    width: 300px;
  `}
`
