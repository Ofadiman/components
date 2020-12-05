/* eslint-disable prettier/prettier */
import { pv } from '../../../functions/pv/pv'
import { componentConst } from '../component.const'

export const template = `
import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { ${pv(componentConst.vars.name)}Props } from './${pv(componentConst.vars.name)}.types'

export const ${pv(componentConst.vars.name, ['camelCase'])}StoryProps: ComponentStoriesProps<${pv(componentConst.vars.name)}Props> = []
`
