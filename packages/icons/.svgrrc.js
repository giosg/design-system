module.exports = {
  outDir: "src/components",
  filenameCase: "camel",
  typescript: true,
  jsxRuntime: `automatic`,
  expandProps: "end",
  ref: true,
  jsx: {
    babelConfig: {
      plugins: [
        // Replace every meaningful fill/stroke with currentColor
        [require("./svgr/fill-stroke-plugin.js")],
      ],
    },
  },
  template: require("./svgr/template.js"),
  indexTemplate: require("./svgr/index-template.js"),
};
