/* eslint-disable prettier/prettier */
import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import { storiesOf } from '@storybook/react'
import React from 'react'

import { ${pv(componentConst.vars.name)} } from './${pv(componentConst.vars.name)}'

storiesOf('Components/${pv(componentConst.vars.directory, ['pascalCase'])}/${pv(componentConst.vars.name)}', module).add('Default', () => <${pv(componentConst.vars.name)} />)
`
