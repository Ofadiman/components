import clsx from 'clsx'
import React from 'react'

import { useSpinnerStyles } from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

export const Spinner: FC<SpinnerProps> = ({ className, size = 'medium' }) => {
  const classes = useSpinnerStyles()

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium',
        [classes.large]: size === 'large'
      })}
    >
      <div className={classes.arm} />
      <div className={classes.arm} />
      <div className={classes.arm} />
    </div>
  )
}
