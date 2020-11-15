export interface CheckboxProps {
  className?: string
  inputId: string
  isInitiallyChecked?: boolean
  onChange: (isChecked: boolean) => void
}

export interface StyledCheckboxProps {
  isChecked: boolean
}
