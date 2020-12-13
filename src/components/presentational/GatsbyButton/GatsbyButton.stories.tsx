import { handleConsoleLog } from '@ofadiman/shared'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { GatsbyButton } from './GatsbyButton'
import { GatsbyButtonProps } from './GatsbyButton.types'

export default {
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    },
    size: {
      control: {
        options: ['small', 'medium'],
        type: 'inline-radio'
      },
      defaultValue: 'small'
    },
    title: {
      control: {
        type: 'text'
      },
      defaultValue: 'Click me!'
    }
  },
  title: 'Components/Presentational/GatsbyButton'
} as Meta

const Template: Story<GatsbyButtonProps> = (args) => <GatsbyButton {...args} />

export const Main = Template.bind({})
Main.args = { onClick: handleConsoleLog('GatsbyButton click') }
