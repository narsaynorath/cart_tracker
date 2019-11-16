module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': ['error', { prop: 'ignore' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['__tests__/**', 'storybook/**', 'src/stories/**'],
      },
    ],
    'global-require': 'off', // Auto-generated storyLoader.js uses require
  },
  globals: {
    fetch: false,
  },
};
