module.exports = {
    env: {
        browser: true,
        es2023: true,
        jest: true,
    },
    extends: [
        'standard',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
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
        '@typescript-eslint',
        '@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'react',
        'jsx-a11y',
        '@typescript-eslint'
    ],
    rules: {
        'prettier/prettier': ["error", {
            "singleQuote": true,
            "trailingComma": "all",
            "semi": false,
            "useTabs": true,
            "tabWidth": 4
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