module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",

    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "no-console": "error",
    "no-undef": 'off'
  },
}
