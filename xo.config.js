'use strict';

const globals = require('globals');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
      globals: {
        ...globals.browser
      }
    },
    space: 2,
    rules: {
      '@stylistic/comma-dangle': [
        'error',
        'never'
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/spaced-comment': 'off',
      '@stylistic/space-before-function-paren': [
        'error',
        'never'
      ],
      camelcase: [
        'error',
        {
          properties: 'never'
        }
      ],
      'no-negated-condition': 'off',
      'capitalized-comments': 'off',
      'default-case': 'off',
      'prefer-template': 'error',
      'unicorn/no-negated-condition': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off'
    }
  }
];
