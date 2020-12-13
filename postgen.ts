import { green, whiteBright } from 'chalk'
import { command } from 'execa'
import ora from 'ora'

const spinner = ora(`${green('[Eslint]')} ${whiteBright('Running eslint.')}`)

const codegen = async (): Promise<void> => {
  spinner.start()
  await command('eslint -f ./.eslint.formatter.js {src,codegen,.storybook}/**/*.{ts,tsx,js,jsx} --fix')
  spinner.stop()
}

void codegen()
