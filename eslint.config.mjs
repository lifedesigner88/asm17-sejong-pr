import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/**", "dist/**", ".nx/**", "apps/**/.venv/**"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["apps/frontend/src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./apps/frontend/tsconfig.json"
      },
      globals: globals.browser
    },
    rules: {
      "no-console": "warn"
    }
  }
];

