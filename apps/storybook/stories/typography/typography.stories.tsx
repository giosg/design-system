import type { Meta, StoryObj } from "@storybook/react";
import { Label, TextColors } from "@giosg/design-system-typography";
import { HTMLAttributes } from "react";
import s from "./typography.module.css";

const meta: Meta = {
  title: "Typography/Label",
};

export default meta;

const LabelContainer = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }} {...props} />;
};

type Story = StoryObj<{
  disabled: boolean;
}>;

export const Size: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    return (
      <div className={s.container}>
        <LabelContainer>
          <Label>Label test string</Label>
          <span> - default size (m)</span>
        </LabelContainer>
        <LabelContainer>
          <Label>Label test string</Label>
          <span> - m</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="s">Label test string</Label>
          <span> - s</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="xs">Label test string</Label>
          <span> - xs</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="2xs">Label test string</Label>
          <span> - 2xs</span>
        </LabelContainer>
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
  args: {
    disabled: false,
  },
  render: (args) => {
    return (
      <div className={s.container}>
        {SupportedColors.map((color) => (
          <LabelContainer key={color}>
            <Label color={color}>Label test string</Label>
            <span> - {color}</span>
          </LabelContainer>
        ))}
      </div>
    );
  },
};
