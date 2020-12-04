module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/preset-create-react-app'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.plugins.forEach((plugin) => {
      if (plugin.options && plugin.options.eslintPath) {
        plugin.options = { ...plugin.options, extensions: ['.stories.tsx'] }
      }
    })

    return config
  }
}
