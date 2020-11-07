import { storiesOf } from '@storybook/react'
import React from 'react'

import { ReactComponent as CSSSvg } from '../../assets/icons/css.inline.svg'
import { ReactComponent as DockerSvg } from '../../assets/icons/docker.inline.svg'
import { ReactComponent as GitSvg } from '../../assets/icons/git.inline.svg'
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.inline.svg'
import { ReactComponent as PostgreSQLSvg } from '../../assets/icons/postgresql.inline.svg'
import { ReactComponent as ReactSvg } from '../../assets/icons/react.inline.svg'
import { ReactComponent as TypeScriptSvg } from '../../assets/icons/typescript.inline.svg'
import CodeImagePath from '../../assets/images/code-image.jpg'
import { storybookLog } from '../../utils/functions/storybookLog/storybookLog.function'
import { OfanotesCard } from './OfanotesCard.component'

storiesOf('OfanotesCard', module).add('Default', () => (
  <OfanotesCard
    buttonText={'Lorem Ipsum'}
    description={
      'Assimilation at the solar system that is when conscious crews tremble. The sonic shower is more space suit now than nanomachine. dead and oddly greatly exaggerated.'
    }
    icons={[CSSSvg, DockerSvg, GitSvg, JavaScriptSvg, PostgreSQLSvg, ReactSvg, TypeScriptSvg]}
    image={CodeImagePath}
    onActionButtonClick={storybookLog('onActionButtonClick')}
  />
))
