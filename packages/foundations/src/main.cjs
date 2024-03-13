const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const fontFamilyPlugin = require("../plugins/font-family-plugin.js");
const mergeDeclPlugin = require("../plugins/merge-decl-plugin.js");
const tokensPlugin = require("../plugins/tokens-plugin.js");

// Process a CSS file
async function processCss(filePaths = [], plugins = []) {
  let combinedCss = "";

  filePaths.forEach((filePath) => {
    const absolutePath = path.resolve(__dirname, "./css/", filePath);
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
  const tokenResult = await processCss(["dark.css", "light.css"], [tokensPlugin()]);
  const result = await postcss([fontFamilyPlugin()]).process(tokenResult, { from: undefined });
  const base = await processCss(["base.css"], []);
  const reset = await processCss(["reset.css"], []);
  const svg = await processCss(["svg.css"], []);

  mergeDeclarations([base, reset, svg, result], "index.css");
}

execute().catch(console.error);
