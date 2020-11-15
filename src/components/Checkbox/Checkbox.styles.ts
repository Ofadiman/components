import styled, { css } from 'styled-components'

import { StyledCheckboxProps } from './Checkbox.types'

export const StyledCheckboxIcon = styled.svg.attrs({ viewBox: '0 0 24 24' })`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  transition: visibility 150ms;
`
export const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? 'gray' : 'transparent'};
    border: 1px solid gray;
    border-radius: 4px;
    height: 24px;
    position: relative;
    transition: background-color 150ms ease-in-out;
    width: 24px;

    ${StyledCheckboxIcon} {
      visibility: ${isChecked ? 'visible' : 'hidden'};
    }
  `}
`
