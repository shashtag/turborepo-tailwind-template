module.exports = {
  ...require('config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    // react
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',

    // next
    '@next/next/no-html-link-for-pages': 'off',
  },
}
