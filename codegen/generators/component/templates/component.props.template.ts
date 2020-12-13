import { composePlopVariable, PlopHelpers } from '@ofadiman/plop'

import { componentConst } from '../component.const'

const name = composePlopVariable(componentConst.vars.name)
const camelCaseName = composePlopVariable(componentConst.vars.name, [PlopHelpers.CamelCase])

export const template = `
import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { ${name}Props } from './${name}.types'

export const ${camelCaseName}StoryProps: ComponentStoriesProps<${name}Props> = []
`
