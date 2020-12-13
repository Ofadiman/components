import { composePlopVariable } from '@ofadiman/plop'
import { ActionType } from 'plop'

import { componentConst } from './component.const'

const directory = composePlopVariable(componentConst.vars.directory)
const name = composePlopVariable(componentConst.vars.name)

export const componentActions: ActionType[] = [
  {
    path: `src/components/${directory}/${name}/${name}.tsx`,
    template: require('./templates/component.template').template,
    type: 'add'
  },
  {
    path: `src/components/${directory}/${name}/${name}.styles.ts`,
    template: require('./templates/component.styles.template').template,
    type: 'add'
  },
  {
    path: `src/components/${directory}/${name}/${name}.test.tsx`,
    template: require('./templates/component.test.template').template,
    type: 'add'
  },
  {
    path: `src/components/${directory}/${name}/${name}.types.ts`,
    template: require('./templates/component.types.template').template,
    type: 'add'
  },
  {
    path: `src/components/${directory}/${name}/${name}.stories.tsx`,
    template: require('./templates/component.stories.template').template,
    type: 'add'
  },
  {
    path: `src/components/${directory}/${name}/${name}.props.tsx`,
    template: require('./templates/component.props.template').template,
    type: 'add'
  }
]
