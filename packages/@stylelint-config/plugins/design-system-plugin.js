const stylelint = require("stylelint");
const ruleName = "design-system/gds-prefix";

module.exports = stylelint.createPlugin(ruleName, function (expectation) {
	return function (postcssRoot, postcssResult) {
		const validOptions = stylelint.utils.validateOptions(postcssResult, ruleName, {
			actual: expectation,
		});

		if (!validOptions) {
			return;
		}

		postcssRoot.walkDecls((decl) => {
			if (decl.prop.startsWith("--") && !decl.prop.startsWith("--gds")) {
				stylelint.utils.report({
					message: `Expected custom property '${decl.prop}' to be prefixed with '--gds'`,
					node: decl,
					result: postcssResult,
					ruleName: ruleName,
				});
			}
		});
	};
});

module.exports.ruleName = ruleName;
module.exports.messages = stylelint.utils.ruleMessages(ruleName, {
	expected: "Expected custom property to be prefixed with --gds",
});
