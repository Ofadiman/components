import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Stringify } from './Stringify'
import { StringifyProps } from './Stringify.types'

export default {
  argTypes: {
    indentBy: {
      control: {
        max: 10,
        min: 2,
        step: 2,
        type: 'range'
      },
      defaultValue: 4
    },
    value: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Presentational/Stringify'
} as Meta

const Template: Story<StringifyProps> = (args) => <Stringify {...args} />

export const Main = Template.bind({})
Main.args = { value: [{ foo: { bar: 'buzz' } }, null, 1, 'string', ['nest', 'array']] }
