import { ActionType } from 'plop'

import { Component } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `src/components/{{ ${Component.Name} }}/{{ ${Component.Name} }}.component.tsx`,
    template: require('./templates/template.component').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Name} }}/{{ ${Component.Name} }}.styles.ts`,
    template: require('./templates/template.styles').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Name} }}/{{ ${Component.Name} }}.test.tsx`,
    template: require('./templates/template.test').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Name} }}/{{ ${Component.Name} }}.types.ts`,
    template: require('./templates/template.types').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Name} }}/{{ ${Component.Name} }}.stories.tsx`,
    template: require('./templates/template.stories').template,
    type: 'add'
  }
]
