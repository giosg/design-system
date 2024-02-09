/** @type {import('stylelint').Config} */
module.exports = {
	extends: ["@repo/stylelint-config"],
	rules: {
		"design-system/gds-prefix": null,
	},
	files: ["*.css"],
};
