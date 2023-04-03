module.exports = {
  extends: [
    './base',
    './rules/react',
    './typescript'
  ].map(require.resolve),
}
