这个包基于 Airbnb 的 eslint 规则提供简化的、不太严格的校验规则。

# 用法
1\. 安装依赖

```
npm i -D @slothkit/eslint-config
```

2\. 参照 `./.eslintrc.js` 修改你自己的 eslint 配置

3\. 根据技术栈不同，选择合适的扩展配置：

||||
|-|-|-|
|JavaScript|@slothkit/eslint-config/base|
|TypeScript|@slothkit/eslint-config/typescript|
|React|@slothkit/eslint-config/base 和 @slothkit/eslint-config/rules/react|
|Typescript+React|@slothkit/eslint-config|