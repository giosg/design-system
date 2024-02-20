module.exports = (opts = {}) => {
	const fontWeightMapping = {
		black: "900",
		bold: "700",
		regular: "400",
		"semi-bold": "600",
	};

	return {
		postcssPlugin: "font-family-replace",
		Declaration(decl) {
			if (decl.prop === "--gds-sys-font-families-nunito-sans") {
				decl.value = "var(--gds-font-ui-stack)";
			}

			if (decl.prop.startsWith("--gds-sys-font-weights-")) {
				const weightName = decl.prop.split("-").pop();
				if (fontWeightMapping[weightName]) {
					decl.value = fontWeightMapping[weightName];
				}
			}
		},
	};
};

module.exports.postcss = true;
