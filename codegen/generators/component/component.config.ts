import { composeValidators, PlopGeneratorConfig, requireInput, requirePascalCase } from '@ofadiman/plop'
import { green } from 'chalk'
import { Answers } from 'inquirer'

import { componentActions } from './component.actions'
import { componentConst } from './component.const'

export const componentConfig: PlopGeneratorConfig = {
  actions: (answers) => (!answers || !answers[componentConst.vars.shouldGenerateCode] ? [] : componentActions),
  description: 'Generate a component.',
  prompts: [
    {
      message: 'Component name (pascal case string)',
      name: componentConst.vars.name,
      type: 'input',
      validate: composeValidators(
        requireInput('Component name cannot be empty!'),
        requirePascalCase('Component must be in pascal case!')
      )
    },
    {
      choices: ['logical', 'presentational'],
      message: 'Directory:',
      name: componentConst.vars.directory,
      type: 'list'
    },
    {
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ],
      message: (answers: Answers): string => {
        return `Do you want to generate ${green(answers[componentConst.vars.name])} component?`
      },
      name: componentConst.vars.shouldGenerateCode,
      type: 'list'
    }
  ]
}
