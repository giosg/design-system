const postcss = require("postcss");

module.exports = (opts = {}) => {
	const rootDeclarations = {};
	const importRules = [];

	return {
		postcssPlugin: "merge-decl-plugin",
		Once(root) {
			root.walkAtRules("import", (rule) => {
				importRules.push(rule);
				rule.remove();
			});
		},
		Rule(rule) {
			if (rule.selector === ":root") {
				rule.walkDecls((decl) => {
					rootDeclarations[decl.prop] = decl.value;
					decl.remove();
				});

				rule.remove();
			}
		},
		OnceExit(root) {
			const newRule = postcss.rule({ selector: ":root" });

			for (const prop in rootDeclarations) {
				newRule.append({ prop: prop, value: rootDeclarations[prop] });
			}

			root.prepend(newRule);

			// Prepend all @import rules at the top
			importRules.reverse().forEach((rule) => {
				root.prepend(rule);
			});
		},
	};
};

module.exports.postcss = true;
