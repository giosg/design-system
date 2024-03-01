import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@giosg/design-system-icons";
import styles from "./icons.module.css";

const meta: Meta = {
  title: "Icons/List",
  argTypes: {
    width: {
      control: { type: "number", min: 2, max: 50, step: 2 },
    },
    height: {
      control: { type: "number", min: 2, max: 50, step: 2 },
    },
    color: {
      control: {
        description: "asdf",
        type: "color",
        presetColors: ["red", "black"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<{
  color: string;
  width: number | undefined;
  height: number | undefined;
}>;

type Keys = keyof typeof Icons;
const IconKeys = Object.keys(Icons) as Keys[];
const ComponentArray = IconKeys.map((key) => Icons[key]);

export const List: Story = {
  args: {
    color: "red",
    width: undefined,
  },
  render: (args) => {
    const { color, height, width } = args;

    let props = {};

    if (width) {
      props = { ...props, width };
    }
    if (height) {
      props = { ...props, height };
    }

    return (
      <div className={styles.container} style={{ color }}>
        {ComponentArray.map((Icon, index) => (
          <div className={styles.iconWrapper} key={index}>
            <Icon {...props} />
            <span>{IconKeys[index]}</span>
          </div>
        ))}
      </div>
    );
  },
};
