const tasks = (arr) => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['yarn check:typescript', 'yarn test:ci', 'lint-staged'])
  }
}
