import { Component } from '../component.const'

export const template = `
import { storiesOf } from '@storybook/react'
import React from 'react'

import { {{ ${Component.Vars.Name} }} } from './{{ ${Component.Vars.Name} }}.component'

storiesOf(\`{{ ${Component.Vars.Name} }}\`, module).add(\`Default\`, () => <{{ ${Component.Vars.Name} }} />)
`
