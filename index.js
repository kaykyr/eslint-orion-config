module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    browser: true,
    jest: true,
  },
  extends: ["standard", "plugin:prettier/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import-helpers"],
  rules: {
    "prettier/prettier": "error",
    "import-helpers/order-imports": "off",
    "no-template-curly-in-string": "off",
    "no-useless-constructor": "off",
    "no-new": "off",
    camelcase: "off",
    "no-void": "off",
    "no-undef": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "no-use-before-define": "off",
    "no-case-declarations": "off",
    "array-callback-return": "off",
    "no-new-require": "off",
    "new-cap": "off",
    "n/no-new-require": "off",
    "no-unreachable-loop": "off",
    "no-extend-native": "off",
    "no-async-promise-executor": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".d.ts"],
    },
  },
};
