![npm (scoped)](https://img.shields.io/npm/v/@slothkit/eslint-config)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/eslint-config)
![npm](https://img.shields.io/npm/dt/@slothkit/eslint-config)

这个包基于本地内置（vendor）的 Airbnb 风格规则，提供简化且相对宽松的 ESLint 配置。

## 用法
1. 安装依赖：

```bash
npm i -D eslint@^9 @slothkit/eslint-config
```

2. 创建或修改 `eslint.config.js`：

```js
const sloth = require('@slothkit/eslint-config')

module.exports = [...sloth]
```

3. 在 `package.json` 中增加 lint 命令：

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

4. 根据技术栈选择扩展配置：

| 技术栈 | 扩展 |
| - | - |
| JavaScript | `@slothkit/eslint-config/base` |
| TypeScript | `@slothkit/eslint-config/typescript` |
| React | `@slothkit/eslint-config/base` 和 `@slothkit/eslint-config/rules/react` |
| TypeScript + React | `@slothkit/eslint-config` |

TypeScript 配置需要在 `eslint.config.js` 里补充 parser 配置：

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
