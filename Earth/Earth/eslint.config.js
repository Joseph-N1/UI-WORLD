import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactThreeFiber from 'eslint-plugin-react-three-fiber';
import globals from 'globals';

export default [
  {
    ignores: ['dist'], // Ignore the 'dist' folder
  },
  {
    files: ['**/*.{js,jsx}'], // Apply to JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, // Enable browser globals
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react, // React rules
      'react-hooks': reactHooks, // React hooks rules
      'react-refresh': reactRefresh, // React refresh for HMR
      'react-three-fiber': reactThreeFiber, // React Three Fiber rules
    },
    rules: {
      // Include recommended rules from each plugin
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...reactThreeFiber.configs.recommended.rules,

      // Custom overrides
      'react/jsx-no-target-blank': 'off', // Allow links without `rel="noopener noreferrer"`
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow exporting constant components
      ],
    },
  },
];
