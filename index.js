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
