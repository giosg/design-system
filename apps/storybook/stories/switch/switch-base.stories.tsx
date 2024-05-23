import type { Meta, StoryObj } from "@storybook/react";
import { Switch, _Root, _Thumb } from "@giosg-design-system/switch";
import s from "./switch.module.css";

const meta: Meta = {
  title: "Switch/Base",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<{
  disabled: boolean;
}>;

export const Base: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    const { disabled } = args;
    return (
      <div
        className={s.container}
        data-testid="container"
        style={{ width: 100, height: 100, padding: 20, alignItems: "center", justifyContent: "center" }}
      >
        <Switch data-testid="component" disabled={disabled} />
      </div>
    );
  },
};
