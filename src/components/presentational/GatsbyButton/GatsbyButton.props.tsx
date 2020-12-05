import { storybookLog } from '../../../functions/storybookLog/storybookLog'
import { ComponentStoriesProps } from '../../../types/ComponentStoriesProps.type'
import { GatsbyButtonProps } from './GatsbyButton.types'

export const gatsbyButtonStoryProps: ComponentStoriesProps<GatsbyButtonProps> = [
  { onClick: storybookLog('small button click'), size: 'small', title: 'Small' },
  { onClick: storybookLog('medium button click'), size: 'medium', title: 'Medium' }
]
