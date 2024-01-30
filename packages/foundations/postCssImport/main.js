const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const normalizer = require("../plugins/normalize-plugin.js");
const systemPlugin = require("../plugins/system-plugin.js");
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
async function mergeDeclarations(filesToMerge, outputFile) {
	const [file1, file2, file3] = filesToMerge;
	const css1 = fs.readFileSync(path.join(__dirname, file1), "utf-8");
	const css2 = fs.readFileSync(path.join(__dirname, file2), "utf-8");
	const css3 = fs.readFileSync(path.join(__dirname, file3), "utf-8");

	const combined = css1 + "\n" + css2 + "\n" + css3;
	const result = await postcss([mergeDeclPlugin()]).process(combined, {
		from: combined,
	});

	fs.writeFileSync(path.join(__dirname, "..", outputFile), result.css);
}

// Execute the tasks
async function execute() {
	await processCss("reference.css", "reference-output.css", [normalizer(), referencePlugin()]);
	await processCss("system.css", "system-output.css", [normalizer(), systemPlugin()]);
	mergeDeclarations(["base.css", "reference-output.css", "system-output.css"], "index.css");
}

execute().catch(console.error);
