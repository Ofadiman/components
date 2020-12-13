import { composePlopVariable } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const name = composePlopVariable(componentConst.vars.name)

export const template = `
export interface ${name}Props {
  className?: string
}
`
