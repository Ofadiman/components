export interface TripleArmSpinnerProps {
  className?: string
  isSmall?: boolean
}

export interface StyledTripleArmSpinnerProps extends Pick<TripleArmSpinnerProps, 'isSmall'> {}
