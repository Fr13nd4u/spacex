module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
    'max-len': ['error', { code: 80 }],
    indent: ['warn', 2],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/strict-boolean-expressions': 0
  }
}
