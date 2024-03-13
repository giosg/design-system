const colorIds = ["main", "alt", "accent"];

/**
 * Plugin that replaces the `id` attribute with a `data-color` attribute for ease of targeting different layers in CSS.
 */
module.exports = (root) => {
  function traverse(node) {
    if (node.type === "element" && node.attributes) {
      const { id = "", ...restAttributes } = node.attributes;

      const normalizedId = id.toLowerCase();

      if (colorIds.includes(normalizedId)) {
        node.attributes = { ...restAttributes, "data-color": normalizedId };
      }
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }
  traverse(root);
  return root;
};
