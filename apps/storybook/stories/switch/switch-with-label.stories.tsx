import type { Meta, StoryObj } from "@storybook/react";
import { Switch, _Root, _Thumb } from "@giosg/design-system-switch";
import { Label } from "@giosg/design-system-typography";
import s from "./switch.module.css";

const meta: Meta = {
  title: "Switch/With Label",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

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
        <div className={s.section}>
          <h3>Label Disabled</h3>
          <Label>
            Left
            <Switch disabled />
            Right
          </Label>
        </div>
      </div>
    );
  },
};
