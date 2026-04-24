![npm (scoped)](https://img.shields.io/npm/v/@slothkit/eslint-config)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/eslint-config)
![npm](https://img.shields.io/npm/dt/@slothkit/eslint-config)

[中文文档](./README.zh_CN.md)

This package provides simplified and less strict lint rules based on vendored Airbnb-style rules.

## Usage
1. Install dependencies:

```bash
npm i -D eslint@^9 @slothkit/eslint-config
```

2. Create or update `eslint.config.js`:

```js
const sloth = require('@slothkit/eslint-config')

module.exports = [...sloth]
```

3. Add lint script:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

4. Choose the proper extension config by stack:

| Technology Stack | Config |
| - | - |
| JavaScript | `@slothkit/eslint-config/base` |
| TypeScript | `@slothkit/eslint-config/typescript` |
| React | `@slothkit/eslint-config/base` + `@slothkit/eslint-config/rules/react` |
| TypeScript + React | `@slothkit/eslint-config` |

For TypeScript configs, set parser options in your `eslint.config.js`:

```js
{
  files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
}
```
