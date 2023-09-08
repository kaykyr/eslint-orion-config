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
        'prettier/prettier': ['error', {
            printWidth: 140,
            trailingComma: 'all',
            arrowParens: 'always',
            semi: false,
            endOfLine: 'auto',
            singleQuote: true,
            eslintIntegration: true,
            useTabs: true,
            useTab: true,
            proseWrap: 'always',
            tabWidth: 4,
            requireConfig: false,
            bracketSpacing: true,
            jsxBracketSameLine: false,
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true,
                "source.addMissingImports": true,
            },
            "editor.detectIndentation": true,
            "[json]": {
                "editor.defaultFormatter": "vscode.json-language-features"
            },
            "[javascript]": {
                "editor.codeActionsOnSave": {
                    "source.fixAll.eslint": true,
                    "source.addMissingImports": true,
                },
                "editor.defaultFormatter": "vscode.typescript-language-features",
            },
            "[javascriptreact]": {
                "editor.codeActionsOnSave": {
                    "source.fixAll.eslint": true,
                    "source.addMissingImports": true,
                },
            },
            "tailwindCSS.includeLanguages": {
                "typescript": "javascript", // if you are using typescript
                "typescriptreact": "javascript" // if you are using typescript with react
            },
            "editor.quickSuggestions": {
                "strings": true // forces VS Code to trigger completions when editing "string" content
            },
            "editor.tabSize": 4,
            "explorer.confirmDelete": true,
            "editor.rulers": [
                160,
                140
            ],
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