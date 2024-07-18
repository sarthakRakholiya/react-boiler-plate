module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Best Practices
    eqeqeq: 'error',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    // "no-unused-expressions": ["error", { allowTernary: true }],
    'no-useless-concat': [0],
    'no-useless-return': 'error',

    // Variable
    // 'init-declarations': 'error',
    // "no-use-before-define": "error",
    'no-unused-vars': [0],

    // Stylistic Issues
    'array-bracket-newline': ['off'],
    'array-bracket-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'block-spacing': 'error',
    'comma-dangle': 'off',
    // "comma-dangle": ["error", "ignore"],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': 'off',
    // "implicit-arrow-linebreak": ["warn", "beside"],
    // indent: ['error', 4],
    'keyword-spacing': 'error',
    'multiline-ternary': 'off',
    // 'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    // "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    // "nonblock-statement-body-position": "error",
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'quote-props': ['error', 'as-needed'],
    // quotes: ['error', 'prefer-single'],
    semi: [0],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    // 'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    // ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 0,
    'prefer-const': 'off',
    'prefer-template': 'off',
  },

  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   semi: ['error', 'never'],
  //   'max-len': 'off',
  //   camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }]
  // }
};
