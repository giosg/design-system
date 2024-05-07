import type { Meta, StoryObj } from "@storybook/react";
import { Switch, _Root, _Thumb } from "@giosg/design-system-switch";
import { Label } from "@giosg/design-system-typography";
import s from "./switch.module.css";

const meta: Meta = {
  title: "Switch/Base",
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
    return <Switch disabled={disabled} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <div className={s.container}>
        <div className={s.section}>
          <h3>Label left</h3>
          <Label>
            Press me to switch
            <Switch />
          </Label>
        </div>
        <div className={s.section}>
          <h3>Label right</h3>
          <Label>
            <Switch />
            Press me to switch
          </Label>
        </div>
        <div className={s.section}>
          <h3>Label Both Sides</h3>
          <Label>
            Left
            <Switch />
            Right
          </Label>
        </div>
      </div>
    );
  },
};
