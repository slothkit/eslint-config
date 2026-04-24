const path = require('path')
const { fromEslintrc } = require('../flat-compat')

const legacyReact = require('../legacy/rules/react')

const legacyRulesRoot = path.join(__dirname, '../legacy/rules')

module.exports = fromEslintrc(legacyReact, legacyRulesRoot)
