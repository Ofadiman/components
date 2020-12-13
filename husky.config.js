const tasks = (arr) => arr.join(' && ')

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': tasks(['yarn test:ci', 'lint-staged'])
  }
}
