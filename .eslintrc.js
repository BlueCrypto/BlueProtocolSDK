module.exports = {
    extends: 'eslint-config-google',
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
    },
    env: {
      es6: true,
      node: true,
      commonjs: true
    },
    rules: {
      'comma-dangle': ['error', 'never'],
      'max-len': ['error', {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      'no-invalid-this': 0
    }
  };
  