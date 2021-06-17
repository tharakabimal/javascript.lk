module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'sort-destructure-keys'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'no-use-before-define': 'off',
        'sort-destructure-keys/sort-destructure-keys': 2,
    },
    // Append the following snippet of code to avoid a bug where eslint not detecting the version of React 👇.
    settings: {
        react: {
            version: 'latest',
        },
    },
};
