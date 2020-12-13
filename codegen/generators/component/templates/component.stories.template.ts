import { composePlopVariable, PlopHelpers } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const camelCaseName = composePlopVariable(componentConst.vars.name, [PlopHelpers.CamelCase])
const name = composePlopVariable(componentConst.vars.name)
const pascalCaseDirectory = composePlopVariable(componentConst.vars.directory, [PlopHelpers.PascalCase])

export const template = `
import { storiesOf } from '@storybook/react'
import React from 'react'

import { ${name} } from './${name}'
import { ${camelCaseName}StoryProps } from './${name}.props'

const clientApi = storiesOf('Components/${pascalCaseDirectory}/${name}', module)

${camelCaseName}StoryProps.forEach(({ title, ...props }) => {
  clientApi.add(title, () => <${name} {...props} />)
})

`
