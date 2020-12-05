import clsx from 'clsx'
import React from 'react'

import { useStringifyStyles } from './Stringify.styles'
import { StringifyProps } from './Stringify.types'

export const Stringify: FC<StringifyProps> = ({ className, indentBy = 4, value }) => {
  const classes = useStringifyStyles()

  return <pre className={clsx(classes.root, className)}>{JSON.stringify(value, null, indentBy)}</pre>
}
