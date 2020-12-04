module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: './codegen',
  testRegex: '.*\\.(spec|test)\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
