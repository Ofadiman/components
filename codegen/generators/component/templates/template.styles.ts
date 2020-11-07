import { Component } from '../component.const'

export const template = `
import styled, { css } from 'styled-components'

export const Styled{{ ${Component.Name} }} = styled.div\`
  \${({ theme }) => css\`\`}
\`
`