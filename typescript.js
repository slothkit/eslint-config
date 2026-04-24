const { fromEslintrc, legacyRoot } = require('./flat-compat')

const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']
const legacyTypescript = require('./legacy/typescript')

const converted = fromEslintrc(legacyTypescript, legacyRoot)

module.exports = converted.map((config) => (
  config.files ? config : { ...config, files: tsFiles }
))
