module.exports = () => {
  return {
    visitor: {
      JSXAttribute(path) {
        if (path.node.name.name === "fill" || path.node.name.name === "stroke") {
          if (path.node.value.value !== "none") {
            path.node.value.value = "currentColor";
          }
        }
      },
    },
  };
};
