module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // viewBox is required to resize SVGs with CSS.
          removeViewBox: false,
        },
      },
    },
  ],
};
