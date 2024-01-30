const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const normalizer = require("../plugins/normalize-plugin.js");
const systemPlugin = require("../plugins/system-plugin.js");
const referencePlugin = require("../plugins/reference-plugin.js");
const mergeDeclPlugin = require("../plugins/merge-decl-plugin.js");

// Process a CSS file
async function processCss(inputFile, plugins = []) {
	const css = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
	const result = await postcss(plugins).process(css, {
		from: inputFile,
	});

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
	const refResult = await processCss("reference.css", [normalizer(), referencePlugin()]);
	const sysResult = await processCss("system.css", [normalizer(), systemPlugin()]);
	const baseCss = await processCss("base.css", [normalizer()]);

	mergeDeclarations([baseCss, refResult, sysResult], "index.css");
}

execute().catch(console.error);
