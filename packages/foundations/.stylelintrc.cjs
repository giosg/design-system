/** @type {import('stylelint').Config} */
module.exports = {
	extends: ["@repo/stylelint-config"],
	rules: {
		"property-no-vendor-prefix": null,
	},
	files: ["*.css"],
};
