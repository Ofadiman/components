export interface GatsbyButtonProps {
  className?: string
  isSmall?: boolean
  onClick: () => void
}

export interface StyledGatsbyButtonProps extends Pick<GatsbyButtonProps, 'isSmall'> {}
