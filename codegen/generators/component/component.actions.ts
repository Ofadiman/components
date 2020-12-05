/* eslint-disable prettier/prettier */
import { ActionType } from 'plop'

import { pv } from '../../functions/pv/pv'
import { componentConst } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.tsx`,
    template: require('./templates/component.template').template,
    type: 'add'
  },
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.styles.ts`,
    template: require('./templates/component.styles.template').template,
    type: 'add'
  },
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.test.tsx`,
    template: require('./templates/component.test.template').template,
    type: 'add'
  },
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.types.ts`,
    template: require('./templates/component.types.template').template,
    type: 'add'
  },
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.stories.tsx`,
    template: require('./templates/component.stories.template').template,
    type: 'add'
  },
  {
    path: `src/components/${pv(componentConst.vars.directory)}/${pv(componentConst.vars.name)}/${pv(componentConst.vars.name)}.props.tsx`,
    template: require('./templates/component.props.template').template,
    type: 'add'
  }
]
