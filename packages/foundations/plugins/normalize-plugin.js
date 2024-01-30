/**
 * This plugin is used to normalize the CSS variables used in the GDS.
 * Make everything lowercased and prefixed with --gds-.
 */
module.exports = () => {
	return {
		postcssPlugin: "normalize-plugin",
		Declaration(decl) {
			decl.prop = decl.prop.toLowerCase();
			decl.value = decl.value.toLowerCase();

			if (decl.prop.startsWith("--") && !decl.prop.startsWith("--gds-")) {
				decl.prop = `--gds-${decl.prop.slice(2)}`;
				decl.value = decl.value.replace(/var\((--[^)]+)\)/g, (match, varName) => {
					return `var(--gds-${varName.slice(2)})`;
				});
			}
		},
	};
};

module.exports.postcss = true;
