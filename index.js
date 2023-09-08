module.exports = {
    env: {
        es2023: true,
        node: true,
    },
    extends: ['standard', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                'singleQuote': true,
                'trailingComma': 'all',
                'semi': false,
                'useTabs': true,
                'tabWidth': 4
            },
        ],
        semi: ['error', 'never'],
        'semi-spacing': 'off',
        'semi-style': 'off',
        'no-useless-constructor': 'off',
    },
    settings: {
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
};
