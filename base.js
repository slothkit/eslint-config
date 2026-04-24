const { fromEslintrc, legacyRoot } = require('./flat-compat')
const legacyBase = require('./legacy/base')

module.exports = fromEslintrc(legacyBase, legacyRoot)
