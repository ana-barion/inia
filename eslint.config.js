import path from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";

// ESLint v9 flat config migration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  {
    // ⬇️ put ignores in their own object at the very top
    ignores: ["node_modules/**", ".next/**", "out/**", "public/**"],
  },
  js.configs.recommended,
  ...compat.extends(
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
          paths: ["."],
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "error",
      "@next/next/no-html-link-for-pages": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "react/no-unescaped-entities": "error",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^@/", "react-intersection-observer"],
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": "error",
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
];

export default config;
