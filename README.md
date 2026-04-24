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
| JavaScript | `...require('@slothkit/eslint-config/base')` |
| TypeScript | `...require('@slothkit/eslint-config/typescript')` |
| React | `...require('@slothkit/eslint-config/base')` + `...require('@slothkit/eslint-config/rules/react')` |
| TypeScript + React | `...require('@slothkit/eslint-config')` |

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

## Breaking Change
This major upgrade is Flat Config only and targets `eslint@^9` only.

## Local Integration Test (Recommended)
1. In this repo, pack the local package:

```bash
pnpm pack
```

2. In your real project, install the generated tarball:

```bash
npm i -D /absolute/path/to/slothkit-eslint-config-<version>.tgz
```

3. Configure target project's `eslint.config.js` and lint script:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

4. Run lint in the target project and verify no config/rule loading errors.
