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

2. Create or update your `.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: ['@slothkit/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

3. Add lint script for ESLint 9 (`eslintrc` mode):

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=false eslint ."
  }
}
```

4. Choose the proper extension config by stack:

| Technology Stack | Extends |
| - | - |
| JavaScript | `@slothkit/eslint-config/base` |
| TypeScript | `@slothkit/eslint-config/typescript` |
| React | `@slothkit/eslint-config/base` + `@slothkit/eslint-config/rules/react` |
| TypeScript + React | `@slothkit/eslint-config` |

If your project is JavaScript-only, use `@slothkit/eslint-config/base` and you can omit `parserOptions.project`.

## Breaking Change
This major upgrade targets `eslint@^9` only.

## Local Integration Test (Recommended)
1. In this repo, pack the local package:

```bash
pnpm pack
```

2. In your real project, install the generated tarball:

```bash
npm i -D /absolute/path/to/slothkit-eslint-config-<version>.tgz
```

3. Update the target project's lint script:

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=false eslint ."
  }
}
```

4. Run lint in the target project and verify no config/rule loading errors.
For TypeScript projects, make sure the target project has a valid `tsconfig.json` and `parserOptions.project`.
