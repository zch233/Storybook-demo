const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
    };
    config.plugins.push(new ModuleFederationPlugin({
      name: "storybook",
      remotes: {
        comApp: 'comApp@http://10.123.234.102:10087/remoteEntry.js',
      },
    }));
    return config
  },
};