module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'standard',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'jsx-a11y',
        '@typescript-eslint'
    ],
    rules: {
        'prettier/prettier': ["error", {
            'printWidth': 80,
            'tabWidth': 4,
            'singleQuote': true,
            'trailingComma': 'all',
            'arrowParens': 'always',
            'semi': false,
            'endOfLine': 'auto',
        }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/alt-text': [
            'warn',
            {
            elements: ['img'],
            img: ['Image'],
            },
        ],
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        '@typescript-eslint/interface-name-prefix': 'off',
        '@next/next/no-sync-scripts': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/no-unescaped-entities': 'off',
        'import/no-anonymous-default-export': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@next/next/no-img-element': 'off',
        camelcase: 'off',
        indent: 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    }
}