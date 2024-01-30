var postcss = require("postcss");

module.exports = (opts = {}) => {
	let darkThemeDeclarations = [];
	let lightThemeDeclarations = [];
	let commonDeclarations = [];

	return {
		postcssPlugin: "import-system",
		Declaration(decl, { Rule }) {
			if (decl.prop.toLowerCase().includes("-dark")) {
				darkThemeDeclarations.push({
					prop: decl.prop.replace("-dark", ""),
					value: decl.value,
				});
				decl.remove();
			} else if (decl.prop.toLowerCase().includes("-light")) {
				lightThemeDeclarations.push({
					prop: decl.prop.replace("-light", ""),
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
			commonDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));
			lightThemeDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));
			darkThemeDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));

			// Compare declarations in light and dark arrays
			darkThemeDeclarations = darkThemeDeclarations.filter((darkDecl) => {
				const matchingLightDecl = lightThemeDeclarations.find(
					(lightDecl) => lightDecl.prop === darkDecl.prop && lightDecl.value === darkDecl.value,
				);

				if (matchingLightDecl) {
					// If a matching declaration is found, move it to the common declarations array
					commonDeclarations.push(matchingLightDecl);
					// Remove the matching declaration from the light theme array
					lightThemeDeclarations = lightThemeDeclarations.filter((lightDecl) => lightDecl !== matchingLightDecl);
					// Return false to remove the declaration from the dark theme array
					return false;
				}

				// If no matching declaration is found, keep the declaration in the dark theme array
				return true;
			});

			// Add the common declarations to the light theme under :root rule because they are default
			const defaultThemeDeclarations = [...lightThemeDeclarations, ...commonDeclarations];

			if (defaultThemeDeclarations.length > 0) {
				let lightThemeRule = new Rule({
					selector: ":root,[data-theme='light']",
					nodes: defaultThemeDeclarations,
				});
				root.append(postcss.comment({ text: "Light theme Semantics" }));
				root.append(lightThemeRule);
			}
			if (darkThemeDeclarations.length > 0) {
				let darkThemeRule = new Rule({
					selector: "[data-theme='dark']",
					nodes: darkThemeDeclarations,
				});
				root.append(postcss.comment({ text: "Dark theme Semantics" }));
				root.append(darkThemeRule);
			}
			console.log(
				"Semantics declarations",
				"Light:",
				lightThemeDeclarations.length,
				"Dark:",
				darkThemeDeclarations.length,
				"Common:",
				commonDeclarations.length,
				"Total:",
				lightThemeDeclarations.length + darkThemeDeclarations.length + commonDeclarations.length,
			);
		},
	};
};

module.exports.postcss = true;
