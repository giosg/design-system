module.exports = (opts = {}) => {
	let darkThemeDeclarations = [];
	let lightThemeDeclarations = [];

	return {
		postcssPlugin: "import-semantics",
		Declaration(decl, { Rule }) {
			if (decl.prop.toLowerCase().includes("-dark")) {
				darkThemeDeclarations.push({
					prop: decl.prop.replace("-dark", ""),
					value: decl.value,
				});
				decl.remove();
			} else {
				lightThemeDeclarations.push({
					prop: decl.prop,
					value: decl.value,
				});
				decl.remove();
			}
		},
		Rule: {
			exit(rule) {
				if (rule.nodes.length === 0) {
					rule.remove();
				}
			},
		},
		OnceExit(root, { Rule }) {
			if (lightThemeDeclarations.length > 0) {
				let lightThemeRule = new Rule({
					selector: "[data-theme='light']",
					nodes: lightThemeDeclarations,
				});
				root.append(lightThemeRule);
			}
			if (darkThemeDeclarations.length > 0) {
				let darkThemeRule = new Rule({
					selector: "[data-theme='dark']",
					nodes: darkThemeDeclarations,
				});
				root.append(darkThemeRule);
			}
		},
	};
};

module.exports.postcss = true;
