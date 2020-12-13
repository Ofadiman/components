import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'

import { renderComponent } from './src/functions/renderComponent/renderComponent'

initStoryshots({
  renderer: renderComponent,
  test: multiSnapshotWithOptions()
})
