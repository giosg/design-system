import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@giosg/design-system-icons";

const meta: Meta = {
  title: "Icons/Base",
};

export default meta;

type Story = StoryObj;

export const Base: Story = {
  render: () => {
    return (
      <div style={{ color: "red" }}>
        <Icons.ArrowArrowDown />
        <Icons.ArrowArrowUp />
        <Icons.ArrowArrowUpDown />
      </div>
    );
  },
};
