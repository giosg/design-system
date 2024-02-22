import type { Meta, StoryObj } from "@storybook/react";
import * as Switch from "@giosg/design-system-switch";

const meta: Meta = {
  title: "Switch/Base",
};

export default meta;

type Story = StoryObj;

export const Base: Story = {
  render: () => {
    return (
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
    );
  },
};
