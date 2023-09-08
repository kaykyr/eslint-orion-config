module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["standard", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                printWidth: 80,
                tabWidth: 4,
                useTabs: true,
                useTab: true,
                singleQuote: true,
                trailingComma: "all",
                arrowParens: "always",
                semi: false,
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
            },
        ],
        semi: ['error', 'never'],
        'semi-spacing': 'off',
        'semi-style': 'off',
        'no-useless-constructor': 'off',
    },
    settings: {
        "import/parsers": {
            [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
        },
    },
};
