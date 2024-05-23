import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@giosg-design-system/icons";
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
        type: "color",
        presetColors: ["red", "black", "#084461"],
      },
    },
    colorAlt: {
      control: {
        type: "color",
        presetColors: ["red", "black", "yellow"],
      },
    },
    colorAcc: {
      control: {
        type: "color",
        presetColors: ["purple", "pink", "yellow"],
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
  colorAlt: string;
  colorAcc: string;
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
    color: undefined,
    colorAlt: undefined,
    colorAcc: undefined,
    width: undefined,
    height: undefined,
  },
  render: (args) => {
    const { color, colorAcc, colorAlt, height, width, showNames } = args;

    let props = {};

    if (width) {
      props = { ...props, width };
    }
    if (height) {
      props = { ...props, height };
    }

    const inline = {
      "--gds-svg-main": color,
      "--gds-svg-alt": colorAlt,
      "--gds-svg-accent": colorAcc,
    } as React.CSSProperties;

    return (
      <div className={styles.container} data-testid="container">
        {ComponentArray.map((Icon, index) => (
          <div className={styles.iconWrapper} key={index}>
            <Icon {...props} style={inline} />
            {showNames ? <span>{IconKeys[index]}</span> : null}
          </div>
        ))}
      </div>
    );
  },
};
