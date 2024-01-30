/** @type {import('stylelint').Config} */
module.exports = {
	extends: ["@repo/stylelint-config"],
	ignoreFiles: ["./postCssImport/**/*.css"],
	files: ["*.css"],
};
