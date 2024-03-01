import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@giosg/design-system-icons";
import styles from "./icons.module.css";

const meta: Meta = {
  title: "Icons/List",
  argTypes: {
    showNames: {
      control: { type: "boolean", default: true },
    },
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
        presetColors: ["red", "black", "#084461"],
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
  showNames: boolean;
}>;

type Keys = keyof typeof Icons;
const IconKeys = Object.keys(Icons) as Keys[];
const ComponentArray = IconKeys.map((key) => Icons[key]);

export const List: Story = {
  args: {
    showNames: true,
    color: "black",
    width: undefined,
    height: undefined,
  },
  render: (args) => {
    const { color, height, width, showNames } = args;

    let props = {};

    if (width) {
      props = { ...props, width };
    }
    if (height) {
      props = { ...props, height };
    }

    return (
      <div className={styles.container} data-testid="container" style={{ color }}>
        {ComponentArray.map((Icon, index) => (
          <div className={styles.iconWrapper} key={index}>
            <Icon {...props} />
            {showNames ? <span>{IconKeys[index]}</span> : null}
          </div>
        ))}
      </div>
    );
  },
};
