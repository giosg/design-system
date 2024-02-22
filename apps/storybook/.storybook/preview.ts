import { Preview } from "@storybook/react";
import "@giosg/design-system-foundations/index.css";
import "./global.css";

const preview: Preview = {
  parameters: {
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => {
        // Type 'docs' hoisted over type 'story' If types are same, sort by alphabetical order
        if (a.type === "docs" && b.type !== "docs") return -1;
        if (a.type !== "docs" && b.type === "docs") return 1;
        return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
};

export default preview;
