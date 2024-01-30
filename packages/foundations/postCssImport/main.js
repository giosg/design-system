const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const figmaImport = require("../plugins/figma-import-plugin.js");
const semanticsPlugin = require("../plugins/semantics-plugin.js");
const referencePlugin = require("../plugins/reference-plugin.js");
const mergeDeclPlugin = require("../plugins/merge-decl-plugin.js");

// Process a CSS file
async function processCss(inputFile, outputFile, plugins = []) {
	const css = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
	const result = await postcss(plugins).process(css, {
		from: inputFile,
	});
	fs.writeFileSync(path.join(__dirname, outputFile), result.css);
}

// Merge CSS declarations
async function mergeDeclarations(file1, file2, outputFile) {
	const css1 = fs.readFileSync(path.join(__dirname, file1), "utf-8");
	const css2 = fs.readFileSync(path.join(__dirname, file2), "utf-8");

	const combined = css1 + "\n" + css2;
	const result = await postcss([mergeDeclPlugin()]).process(combined, {
		from: outputFile,
	});
	fs.writeFileSync(path.join(__dirname, "final.css"), result.css);
}

// Execute the tasks
async function execute() {
	await processCss("reference.css", "reference-output.css", [figmaImport(), referencePlugin()]);
	await processCss("semantic.css", "semantic-output.css", [figmaImport(), semanticsPlugin()]);
	mergeDeclarations("reference-output.css", "semantic-output.css", "merged.css");
}

execute().catch(console.error);
