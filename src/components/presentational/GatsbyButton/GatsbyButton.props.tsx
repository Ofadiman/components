import { handleConsoleLog } from '@ofadiman/shared'

import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { GatsbyButtonProps } from './GatsbyButton.types'

export const gatsbyButtonStoryProps: ComponentStoriesProps<GatsbyButtonProps> = [
  { onClick: handleConsoleLog('small button click'), size: 'small', title: 'Small' },
  { onClick: handleConsoleLog('medium button click'), size: 'medium', title: 'Medium' }
]
