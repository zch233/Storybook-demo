import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',
  //
  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,
  //
  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',
  //
  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',
  //
  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',
  //
  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
  //
  brandTitle: '古珀前端组件库',
  // brandUrl: 'https://example.com',
  brandImage: 'data:image/png;base64,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',
});