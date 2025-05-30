export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >=4.0', 'iOS >= 7'],
    },
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root'],
    },
  },
}
