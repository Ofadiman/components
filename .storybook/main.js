module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/preset-create-react-app'],
  stories: ['../**/*.stories.@(tsx)'],
  webpackFinal: async (config) => {
    config.plugins.forEach((plugin) => {
      if (plugin.options && plugin.options.eslintPath) {
        plugin.options = {
          ...plugin.options,
          emitError: false,
          emitWarning: true,
          extensions: ['.stories.tsx'],
          failOnError: false
        }
      }
    })

    return config
  }
}
