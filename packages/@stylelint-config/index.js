/** @type {import('stylelint').Config} */
module.exports = {
	extends: ["stylelint-config-standard"],
	plugins: ["stylelint-prettier"],
	rules: {
		"selector-class-pattern": null,
		"declaration-block-no-redundant-longhand-properties": null,
		"declaration-property-value-no-unknown": true,
		"declaration-empty-line-before": "never",
		"color-hex-length": "long",
		"function-name-case": "lower",
		"value-keyword-case": "lower",
		"declaration-property-unit-disallowed-list": {
			"font-size": ["px"],
		},
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"],
			},
		],
	},
};
