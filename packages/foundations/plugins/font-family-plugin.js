const postcss = require("postcss");

module.exports = postcss.plugin("postcss-replace", function () {
	return function (root) {
		root.walkDecls((decl) => {
			if (decl.prop === "--gds-sys-font-families-nunito-sans") {
				decl.value = "--gds-font-ui-stack";
			}
		});
	};
});
