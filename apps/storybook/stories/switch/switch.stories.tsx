import type { Meta, StoryObj } from "@storybook/react";
import { Switch, _Root, _Thumb } from "@giosg/design-system-switch";
import { Label } from "@giosg/design-system-typography";

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
  render: (args) => {
    const { disabled } = args;
    return (
      <Label>
        Press me to switch
        <Switch disabled={disabled} />
        Label
      </Label>
    );
  },
};
