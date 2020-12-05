import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { SpinnerProps } from './Spinner.types'

export const spinnerStoryProps: ComponentStoriesProps<SpinnerProps> = [
  { size: 'regular', title: 'Default' },
  { size: 'small', title: 'Small' },
  { size: 'large', title: 'Large' }
]
