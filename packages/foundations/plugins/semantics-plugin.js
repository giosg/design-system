module.exports = (opts = {}) => {
	let darkThemeDeclarations = [];
	let lightThemeDeclarations = [];
	return {
		postcssPlugin: "import-semantics",
		Declaration(decl, { Rule }) {
			if (decl.prop.includes("-Dark")) {
				darkThemeDeclarations.push({
					prop: decl.prop.replace("-Dark", ""),
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
			if (darkThemeDeclarations.length > 0) {
				let darkThemeRule = new Rule({
					selector: "[data-theme='dark']",
					nodes: darkThemeDeclarations,
				});
				root.append(darkThemeRule);
			}
			if (lightThemeDeclarations.length > 0) {
				let lightThemeRule = new Rule({
					selector: "[data-theme='light']",
					nodes: lightThemeDeclarations,
				});
				root.append(lightThemeRule);
			}
		},
	};
};

module.exports.postcss = true;
