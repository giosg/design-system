import type { Meta, StoryObj } from "@storybook/react";
import {Switch,_Root, _Thumb} from "@giosg/design-system-switch";

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
    return (
      <Switch disabled={disabled} />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <_Root>
        <_Thumb/>
      </_Root>
    );
  },
};
