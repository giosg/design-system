module.exports = (opts = {}) => {
	return {
		postcssPlugin: "font-family-replace",
		Declaration(decl) {
			if (decl.prop === "--gds-sys-font-families-nunito-sans") {
				decl.value = "var(--gds-font-ui-stack)";
			}
		},
	};
};

module.exports.postcss = true;
