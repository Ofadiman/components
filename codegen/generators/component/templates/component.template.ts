import { composePlopVariable } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const name = composePlopVariable(componentConst.vars.name)

export const template = `
import clsx from 'clsx'
import React from 'react'

import { use${name}Styles } from './${name}.styles'
import { ${name}Props } from './${name}.types'

export const ${name}: FC<${name}Props> = ({ className }) => {
  const classes = use${name}Styles()

  return <div className={clsx(classes.root, className)}>{'renders ${name}'}</div>
}
`
