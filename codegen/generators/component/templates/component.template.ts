import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import clsx from 'clsx'
import React from 'react'

import { use${pv(componentConst.vars.name)}Styles } from './${pv(componentConst.vars.name)}.styles'
import { ${pv(componentConst.vars.name)}Props } from './${pv(componentConst.vars.name)}.types'

export const ${pv(componentConst.vars.name)}: FC<${pv(componentConst.vars.name)}Props> = ({ className }) => {
  const classes = use${pv(componentConst.vars.name)}Styles()

  return <div className={clsx(classes.root, className)}>{'renders ${pv(componentConst.vars.name)}'}</div>
}
`
