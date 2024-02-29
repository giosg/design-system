module.exports = {
  outDir: "src/components",
  filenameCase: "camel",
  typescript: true,
  jsxRuntime: `automatic`,
  expandProps: "end",
  ref: true,
  template: require("./svgr/template.js"),
  indexTemplate: require("./svgr/index-template.js"),
};
