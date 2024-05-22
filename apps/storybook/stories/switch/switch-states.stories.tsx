import type { Meta, StoryObj } from "@storybook/react";
import { Switch, _Root, _Thumb } from "@giosg/design-system-switch";
import s from "./switch.module.css";

const meta: Meta = {
  title: "Switch/States",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<{
  hideNames: boolean;
}>;

export const States: Story = {
  args: {
    hideNames: false,
  },
  render: ({ hideNames }) => {
    return (
      <div className={s.container} data-testid="container">
        <div className={s.row}>
          <Switch />
          {!hideNames && <h3>Off Default</h3>}
        </div>
        <div className={s.row}>
          <Switch checked />
          {!hideNames && <h3>On Default</h3>}
        </div>
        <div className={s.row}>
          <Switch disabled />
          {!hideNames && <h3>Disabled</h3>}
        </div>
        <div className={s.row}>
          <Switch checked disabled />
          {!hideNames && <h3>Checked Disabled</h3>}
        </div>
      </div>
    );
  },
};
