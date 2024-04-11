module.exports = () => {
  return {
    visitor: {
      JSXAttribute(path) {
        // White is needed for embedded SVGs like thumb on switch
        const acceptableValues = ["none", "white"];
        if (path.node.name.name === "fill" || path.node.name.name === "stroke") {
          if (!acceptableValues.includes(path.node.value.value)) {
            path.node.value.value = "currentColor";
          }
        }
      },
    },
  };
};
