const postcss = require("postcss");

module.exports = (opts = {}) => {
	const rootDeclarations = {};
	const sysDeclarations = {};
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
					if (decl.prop.includes("-sys-")) {
						sysDeclarations[decl.prop] = decl.value;
					} else {
						rootDeclarations[decl.prop] = decl.value;
					}
					decl.remove();
				});

				rule.remove();
			}
		},
		OnceExit(root) {
			const newRule = postcss.rule({ selector: ":root" });

			// Get the properties in alphabetical order
			const rootProps = Object.keys(rootDeclarations).sort();
			const sysProps = Object.keys(sysDeclarations).sort();

			// Append the root declarations
			for (const prop of rootProps) {
				newRule.append({ prop: prop, value: rootDeclarations[prop] });
			}

			// Append the sys declarations
			for (const prop of sysProps) {
				newRule.append({ prop: prop, value: sysDeclarations[prop] });
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
