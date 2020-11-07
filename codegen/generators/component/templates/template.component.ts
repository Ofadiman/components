import { Component } from '../component.const'

export const template = `
import React from 'react'

import { Styled{{ ${Component.Name} }} } from './{{ ${Component.Name} }}.styles'
import { {{ ${Component.Name} }}Props } from './{{ ${Component.Name} }}.types'

export const {{ ${Component.Name} }}: FC<{{ ${Component.Name} }}Props> = ({ className }) => {
  return <Styled{{ ${Component.Name} }} className={className}>{'{{ ${Component.Name} }}'}</Styled{{ ${Component.Name} }}>
}
`
