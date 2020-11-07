import { Component } from '../component.const'

export const template = `
import { storiesOf } from '@storybook/react'
import React from 'react'

import { {{ ${Component.Name} }} } from './{{ ${Component.Name} }}.component'

storiesOf(\`{{ ${Component.Name} }}\`, module).add(\`Default\`, () => <{{ ${Component.Name} }} />)
`
