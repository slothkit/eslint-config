const base = require('./base')
const react = require('./rules/react')
const typescript = require('./typescript')

const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']

module.exports = [
  ...base,
  ...react,
  ...typescript,
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
]
