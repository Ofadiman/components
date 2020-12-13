import { composePlopVariable } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const name = composePlopVariable(componentConst.vars.name)

export const template = `
import { makeStyles } from '@material-ui/core/styles'

export const use${name}Styles = makeStyles(
  () => ({
    root: {}
  }),
  {
    name: '${name}'
  }
)
`
