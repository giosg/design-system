module.exports = (opts = {}) => {
	return {
		postcssPlugin: "prefix-vars",
		Declaration(decl) {
			if (decl.prop.startsWith("--") && !decl.prop.startsWith("--gds-")) {
				debugger;
				decl.prop = `--gds-${decl.prop.slice(2).toLowerCase()}`;
			}
		},
	};
};

module.exports.postcss = true;
