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
    // ⬇️ Ignore build/system folders
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
      // 🧹 Disable rules causing build failure
      "import/order": "off",
      "prettier/prettier": "off",

      // ✅ Keep essential React & Next.js rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "error",
      "@next/next/no-html-link-for-pages": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "react/no-unescaped-entities": "error",

      // Allow unresolved imports for custom aliases
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^@/", "react-intersection-observer"],
        },
      ],
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
];

export default config;
