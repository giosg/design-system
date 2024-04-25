import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

/* Stories */
export { Emphasis } from "./emphasis";
export { Palette } from "./palette";
export { Themes } from "./themes";
