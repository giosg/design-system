module.exports = {
  multipass: true,
  plugins: [
    {
      name: "dataColorPlugin",
      params: {
        active: true,
      },
      fn: require("./svgr/data-color-plugin.js"),
    },
    {
      name: "preset-default",
      params: {
        overrides: {
          // viewBox is required to resize SVGs with CSS.
          removeViewBox: false,
          convertColors: {
            names2hex: false,
            rgb2hex: false,
            shorten: false,
          },
        },
      },
    },
  ],
};
