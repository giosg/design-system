var postcss = require("postcss");

module.exports = (opts = {}) => {
	return {
		postcssPlugin: "import-reference",
		Once(root, { Rule }) {
			const rootRule = new Rule({ selector: ":root" });
			// Walk through all declarations and append them to :root
			root.walkDecls((decl) => {
				rootRule.append(decl.clone());
				decl.remove();
			});

			// Sort the declarations by their properties
			rootRule.nodes.sort((a, b) => a.prop.localeCompare(b.prop));

			root.append(rootRule);

			root.walkRules((rule) => {
				if (rule.selector === ":root" && rule.nodes.length === 0) {
					rule.remove();
				}
			});

			console.log("Reference declarations", rootRule.nodes.length);
		},
	};
};

module.exports.postcss = true;
