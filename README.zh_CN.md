![npm (scoped)](https://img.shields.io/npm/v/@slothkit/eslint-config)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/eslint-config)
![npm](https://img.shields.io/npm/dt/@slothkit/eslint-config)

这个包基于本地内置（vendor）的 Airbnb 风格规则，提供简化且相对宽松的 ESLint 配置。

## 用法
1. 安装依赖：

```bash
npm i -D eslint@^9 @slothkit/eslint-config
```

2. 创建或修改 `.eslintrc.js`：

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

3. 在 `package.json` 中增加 lint 命令（ESLint 9 的 eslintrc 模式）：

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=false eslint ."
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

如果是纯 JavaScript 项目，建议使用 `@slothkit/eslint-config/base`，并且可以省略 `parserOptions.project`。

## 破坏性变更
本次大版本升级仅支持 `eslint@^9`。

## 本地接入真实项目验证（推荐）
1. 在当前仓库打包：

```bash
pnpm pack
```

2. 在你的业务项目安装本地 tarball：

```bash
npm i -D /绝对路径/slothkit-eslint-config-<version>.tgz
```

3. 在业务项目设置 lint 命令：

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=false eslint ."
  }
}
```

4. 运行 lint，确认没有配置加载错误和规则不存在错误。
TypeScript 项目还需要确保业务项目存在有效的 `tsconfig.json`，并配置 `parserOptions.project`。
