import type { Meta, StoryObj } from "@storybook/react";
import { BrandGiosg } from "@giosg/design-system-icons";
import { type IconColors } from "@giosg/design-system-icons";
import styles from "./icons.module.css";

const meta: Meta = {
  title: "Icons/Color",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const IconColorsVariants: IconColors[] = [
  "default",
  "dim",
  "inverted",
  "on-light",
  "on-dark",
  "interactive-default",
  "interactive-hover",
  "interactive-pressed",
  "interactive-active",
  "interactive-active-hover",
  "interactive-disabled",
  "interactive-focused",
  "primary-default",
  "secondary-default",
  "tertiary-default",
  "quaternary-default",
  "positive-default",
  "negative-default",
  "info-default",
  "warning-default",
];

export const Color: Story = {
  render: () => {
    return (
      <div className={styles.colorContainer} data-testid="container">
        {IconColorsVariants.map((variant) => (
          <div className={styles.iconWrapper} key={variant}>
            <BrandGiosg color={variant} />
            <span> - {variant}</span>
          </div>
        ))}
      </div>
    );
  },
};
