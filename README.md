![npm (scoped)](https://img.shields.io/npm/v/@slothkit/eslint-config)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/eslint-config)
![npm](https://img.shields.io/npm/dt/@slothkit/eslint-config)

[中文文档](./README.zh_CN.md)

This package provides simplified and less strict validation rules based on Airbnb's eslint rules.

## Usage
1\. Install the dependency:

```
npm i -D @slothkit/eslint-config
```

2\. Modify your own eslint configuration based on `./.eslintrc.js`

3\. Choose the appropriate extension configuration based on the technology stack:

|Technology Stack|Extends|
|-|-|
|JavaScript|@slothkit/eslint-config/base|
|TypeScript|@slothkit/eslint-config/typescript|
|React|@slothkit/eslint-config/base and @slothkit/eslint-config/rules/react|
|TypeScript+React|@slothkit/eslint-config|
