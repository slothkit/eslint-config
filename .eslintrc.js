// This is a test case. It is also a demo.
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    './base',
    './rules/react',
    // 'prettier'
  ].map(require.resolve),
  // When using TypeScript, enabling this configuration is necessary.
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './typescript',
      ].map(require.resolve),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    // 'prettier/prettier': 'warn',
  },
}
