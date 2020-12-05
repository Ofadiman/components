import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { StringifyProps } from './Stringify.types'

export const stringifyStoryProps: ComponentStoriesProps<StringifyProps> = [
  {
    title: 'Default',
    value: [{ foo: { bar: 'buzz' } }, null, 1, 'string', ['nest', 'array']]
  },
  {
    indentBy: 8,
    title: 'Custom indentation',
    value: [{ foo: { bar: 'buzz' } }, null, 1, 'string', ['nest', 'array']]
  }
]
