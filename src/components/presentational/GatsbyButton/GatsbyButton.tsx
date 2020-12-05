import clsx from 'clsx'
import React from 'react'

import { useGatsbyButtonStyles } from './GatsbyButton.styles'
import { GatsbyButtonProps } from './GatsbyButton.types'

export const GatsbyButton: FC<GatsbyButtonProps> = ({ className, onClick, size = 'medium' }) => {
  const classes = useGatsbyButtonStyles()

  return (
    <button
      className={clsx(classes.root, className, {
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium'
      })}
      onClick={onClick}
      type={'button'}
    >
      {'Click me!'}
    </button>
  )
}
