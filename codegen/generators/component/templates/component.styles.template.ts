import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import { makeStyles } from '@material-ui/core/styles'

export const use${pv(componentConst.vars.name)}Styles = makeStyles(
  () => ({
    root: {}
  }),
  {
    name: '${pv(componentConst.vars.name)}'
  }
)
`
