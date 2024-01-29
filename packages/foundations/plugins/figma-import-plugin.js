module.exports = () => {
	return {
		postcssPlugin: "prefix-vars",
		Declaration(decl) {
			if (decl.prop.startsWith("--") && !decl.prop.startsWith("--gds-")) {
				decl.prop = `--gds-${decl.prop.slice(2).toLowerCase()}`;
				decl.value = decl.value.replace(/var\((--[^)]+)\)/g, (match, varName) => {
					return `var(--gds-${varName.slice(2).toLowerCase()})`;
				});
			}
		},
	};
};

module.exports.postcss = true;
