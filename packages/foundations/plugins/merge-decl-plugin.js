const postcss = require("postcss");

module.exports = postcss.plugin("merge-decl-plugin", (opts = {}) => {
	const rootDeclarations = {};

	return {
		postcssPlugin: "merge-decl-plugin",
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
		},
	};
});

module.exports.postcss = true;
