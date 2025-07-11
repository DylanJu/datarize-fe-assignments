module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-only', // 타입만 import하는 경우 import type을 사용하도록 강제
        fixStyle: 'inline-type-imports', // 타입과 값을 함께 import할 때 개별 타입을 명시하도록 설정
      },
    ],
  },
}
