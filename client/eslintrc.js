module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript 파서를 지정
  extends: [
    'plugin:react/recommended', // React 권장 규칙 사용
    'plugin:@typescript-eslint/recommended', // TypeScript 권장 규칙 사용
    'plugin:prettier/recommended', // Prettier 추천 설정 사용
  ],
  parserOptions: {
    ecmaVersion: 2020, // 최신 ECMAScript 기능 사용
    sourceType: 'module', // 모듈 시스템 사용 설정
    ecmaFeatures: {
      jsx: true, // JSX 파싱 허용
    },
  },
  settings: {
    react: {
      version: 'detect', // 자동으로 리액트 버전 감지
    },
  },
  rules: {
    // 필요에 따라 추가적인 규칙 설정
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
