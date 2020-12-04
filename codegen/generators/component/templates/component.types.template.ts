import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
export interface ${pv(componentConst.vars.name)}Props {
  className?: string
}
`
