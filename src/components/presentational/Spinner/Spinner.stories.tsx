import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Spinner } from './Spinner'
import { SpinnerProps } from './Spinner.types'

export default {
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'large'],
        type: 'inline-radio'
      },
      defaultValue: 'medium'
    }
  },
  title: 'Components/Presentational/Spinner'
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Main = Template.bind({})
