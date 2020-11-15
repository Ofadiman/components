import React, { ChangeEvent, useState } from 'react'

import { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxInput } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox: FC<CheckboxProps> = ({ className, onChange, inputId, isInitiallyChecked = false }) => {
  const [isChecked, setIsChecked] = useState(isInitiallyChecked)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked

    setIsChecked(isChecked)
    onChange(isChecked)
  }

  return (
    <StyledCheckbox className={className} isChecked={isChecked}>
      <StyledCheckboxInput checked={isChecked} id={inputId} onChange={handleInputChange} />
      <StyledCheckboxIcon>
        <polyline points={'20 6 9 17 4 12'} />
      </StyledCheckboxIcon>
    </StyledCheckbox>
  )
}
