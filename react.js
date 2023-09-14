module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    browser: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier",
    "import-helpers",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        semi: false,
        singleQuote: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["module", "absolute"],
          "/^@/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-useless-constructor": "off",
    "no-new": "off",
    camelcase: "off",
    "no-void": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "no-case-declarations": "off",
    "array-callback-return": "off",
    semicolon: "error",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
