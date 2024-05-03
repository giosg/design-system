import type { Meta, StoryObj } from "@storybook/react";
import { Label, TextColors, Text } from "@giosg/design-system-typography";
import { HTMLAttributes } from "react";
import s from "./typography.module.css";

const meta: Meta = {
  title: "Typography/Label",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

const Row = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.row} {...props} />;
};

type Story = StoryObj<{
  disabled: boolean;
}>;

const labelSizes = ["m", "s", "xs", "2xs"] as const;

export const Size: Story = {
  render: (args) => {
    return (
      <div className={s.container}>
        {/* Label */}
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Label</h1>
          </header>
          <Row>
            <Label className={s.label}>Label test string</Label>
            <div className={s.descriptionContainer}>
              <span>Default size (m)</span>
              <pre>{`<Label>`}</pre>
            </div>
          </Row>
          {labelSizes.map((size) => {
            return (
              <Row key={size}>
                <Label size={size} className={s.label}>
                  Label test string
                </Label>
                <div className={s.descriptionContainer}>
                  <pre>{`<Label size="${size}">`}</pre>
                </div>
              </Row>
            );
          })}
        </div>
      </div>
    );
  },
};

const SupportedColors: TextColors[] = [
  "default",
  "dim",
  "inverted",
  "on-light",
  "on-dark",
  "link",
  "disabled",
  "hover",
  "pressed",
  "active",
  "primary",
  "secondary",
  "tetriary",
  "quaternary",
  "positive",
  "negative",
  "info",
  "warning",
];

export const Colors: Story = {
  render: (args) => {
    return (
      <div className={s.container}>
        <div className={s.section}>
          {SupportedColors.map((color) => (
            <Row key={color}>
              <Label color={color}>Label test string</Label>
              <span> - {color}</span>
            </Row>
          ))}
        </div>
      </div>
    );
  },
};
