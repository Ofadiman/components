import clsx from 'clsx'
import React from 'react'

import { useSpinnerStyles } from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

export const Spinner: FC<SpinnerProps> = ({ className, size = 'regular' }) => {
  const classes = useSpinnerStyles()

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.small]: size === 'small',
        [classes.regular]: size === 'regular',
        [classes.large]: size === 'large'
      })}
    >
      <div className={classes.arm} />
      <div className={classes.arm} />
      <div className={classes.arm} />
    </div>
  )
}
