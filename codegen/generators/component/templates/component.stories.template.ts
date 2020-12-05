/* eslint-disable prettier/prettier */
import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import { storiesOf } from '@storybook/react'
import React from 'react'

import { ${pv(componentConst.vars.name)} } from './${pv(componentConst.vars.name)}'
import { ${pv(componentConst.vars.name, ['camelCase'])}StoryProps } from './${pv(componentConst.vars.name)}.props'

const clientApi = storiesOf('Components/${pv(componentConst.vars.directory, ['pascalCase'])}/${pv(componentConst.vars.name)}', module)

${pv(componentConst.vars.name, ['camelCase'])}StoryProps.forEach(({ title, ...props }) => {
  clientApi.add(title, () => <${pv(componentConst.vars.name)} {...props} />)
})

`
