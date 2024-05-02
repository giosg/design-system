import type { Meta, StoryObj } from "@storybook/react";
import * as Switch from "@giosg/design-system-switch";

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
      <Switch.Root disabled={disabled}>
        <Switch.Thumb />
      </Switch.Root>
    );
  },
};
