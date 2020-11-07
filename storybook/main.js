module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    'storybook-addon-styled-component-theme/dist/register'
  ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
}
