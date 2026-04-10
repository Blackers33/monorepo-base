import nextPlugin from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import expoConfig from 'eslint-config-expo/flat.js'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/.expo/**',
      'apps/web/.next/**',
      'apps/mobile/metro.config.ts',
      'apps/mobile/scripts/**',
      'apps/mobile/eslint.config.js',
    ],
  },
  {
    files: ['apps/web/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  ...(Array.isArray(expoConfig) ? expoConfig : [expoConfig]).map(config => ({
    ...config,
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],
  })),
  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          project: './apps/mobile/tsconfig.json',
        },
      },
    },
    rules: {
      'react-native/no-raw-text': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]
