/**
 * @description Default plop helpers.
 * camelCase: changeFormatToThis
 * snakeCase: change_format_to_this
 * kebabCase: change-format-to-this
 * dotCase: change.format.to.this
 * pathCase: change/format/to/this
 * pascalCase: ChangeFormatToThis
 * lowerCase: change format to this
 * sentenceCase: Change format to this,
 * constantCase: CHANGE_FORMAT_TO_THIS
 * titleCase: Change Format To This
 */
export const ph = {
  camelCase: 'camelCase',
  constantCase: 'constantCase',
  dotCase: 'dotCase',
  kebabCase: 'kebabCase',
  lowerCase: 'lowerCase',
  pascalCase: 'pascalCase',
  pathCase: 'pathCase',
  sentenceCase: 'sentenceCase',
  snakeCase: 'snakeCase',
  titleCase: 'titleCase'
} as const
