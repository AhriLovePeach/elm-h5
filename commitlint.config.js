// export default { extends: ['@commitlint/config-conventional'] };
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    'subject-case': [0], // 允许任意大小写（如中文）
  },
}
