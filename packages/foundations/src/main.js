const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const fontFamilyPlugin = require("../plugins/font-family-plugin.js");
const mergeDeclPlugin = require("../plugins/merge-decl-plugin.js");
const tokensPlugin = require("../plugins/tokens-plugin.js");

// Process a CSS file
// i need to join paths
async function processCss(filePaths = [], plugins = []) {
	let combinedCss = "";

	filePaths.forEach((filePath) => {
		const absolutePath = path.resolve(__dirname, filePath);
		const css = fs.readFileSync(absolutePath, "utf8");
		combinedCss += css;
	});

	// const css = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
	const result = await postcss(plugins).process(combinedCss, { from: undefined });

	return result;
}

// Merge CSS declarations
async function mergeDeclarations(filesToMerge, outputFile) {
	const combined = filesToMerge.join("");

	const result = await postcss([mergeDeclPlugin()]).process(combined, {
		from: combined,
	});
	fs.writeFileSync(path.join(__dirname, "..", outputFile), result.css);
}

// Execute the tasks
async function execute() {
	const tokenResult = await processCss(["../build/css/dark.css", "../build/css/light.css"], [tokensPlugin()]);

	const result = await postcss([fontFamilyPlugin()]).process(tokenResult, { from: undefined });

	// console.log(tokenResult.css);
	fs.writeFileSync(path.join(__dirname, "kek.css"), result.css);

	// const refResult = await processCss("reference.css", [normalizer(), referencePlugin()]);
	// const sysResult = await processCss("system.css", [normalizer(), systemPlugin()]);
	// const baseCss = await processCss("base.css", [normalizer()]);
	// const reset = await processCss("reset.css", []);

	// mergeDeclarations([baseCss, reset, refResult, sysResult], "index.css");
}

execute().catch(console.error);
