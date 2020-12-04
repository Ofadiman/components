import React from 'react'

import { StringifyProps } from './Stringify.types'

export const Stringify: FC<StringifyProps> = ({ className, indentBy = 4, value }) => {
  return <pre className={className}>{JSON.stringify(value, null, indentBy)}</pre>
}
