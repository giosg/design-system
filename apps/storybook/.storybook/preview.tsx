import React from "react";
import { Preview, Decorator } from "@storybook/react";
import "@giosg/design-system-foundations/index.css";
import "./global.css";

const ThemeDecorator: Decorator = (Story, context) => {
  document?.querySelector("html")?.setAttribute("data-theme", context.globals.theme);

  return <Story {...context} />;
};

const preview: Preview = {
  decorators: [ThemeDecorator],
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
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        // Array of plain string values or MenuItem shape (see below)
        items: [
          {
            value: "light",
            title: "Light",
            icon: "circlehollow",
          },
          {
            value: "dark",
            title: "Dark",
            icon: "circle",
          },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
