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
    "no-undef": "off",
    "no-tabs": "off",
    "multiline-ternary": "off",
    "no-use-before-define": "off",
    "import/no-anonymous-default-export": "off",
    "no-mixed-spaces-and-tabs": "off",
    indent: "off",
    "@next/next/no-img-element": "off",
    // "comma-dangle": "off",
    "no-case-declarations": "off",
    "react-hooks/exhaustive-deps": "off",
    "array-callback-return": "off",
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