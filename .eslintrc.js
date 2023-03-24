module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@docusaurus/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      // optional, if you want to lint code blocks at the same time
      settings: {
        'mdx/code-blocks': true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        'mdx/language-mapper': {},
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@docusaurus/string-literal-i18n-messages': 'error',
    '@docusaurus/no-untranslated-text': 'warn',
  },
};
