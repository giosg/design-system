/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/library.js"],
  rules: {
    // SVGR generates components with a default export
    "import/no-default-export": "off",
    // SVGR generates components with camelCase by default
    "unicorn/filename-case": "off",
  },
};
