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
    'max-len': [
      'error',
      {
        code: 130, // 최대 줄 길이를 130자로 제한
        tabWidth: 2, // 탭 너비를 2칸으로 설정
        ignoreComments: true, // 주석은 길이 제한에서 제외
        ignoreTrailingComments: true, // 줄 끝 주석은 길이 제한에서 제외
        ignoreUrls: true, // URL은 길이 제한에서 제외
        ignoreStrings: true, // 문자열은 길이 제한에서 제외
        ignoreTemplateLiterals: true, // 템플릿 리터럴은 길이 제한에서 제외
        ignoreRegExpLiterals: true, // 정규식은 길이 제한에서 제외
      },
    ],
  },
}
