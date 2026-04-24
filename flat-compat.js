const path = require('path')
const { FlatCompat } = require('@eslint/eslintrc')

function fromEslintrc(eslintrcConfig, baseDirectory) {
  const compat = new FlatCompat({
    baseDirectory,
    resolvePluginsRelativeTo: __dirname,
  })
  return compat.config(eslintrcConfig)
}

module.exports = {
  fromEslintrc,
  legacyRoot: path.join(__dirname, 'legacy'),
}
