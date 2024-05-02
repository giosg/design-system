import type { Meta, StoryObj } from "@storybook/react";
import { Label, TextColors } from "@giosg/design-system-typography";
import { HTMLAttributes } from "react";

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

export const LabelStory: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <LabelContainer>
          <Label>Label test string</Label>
          <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - default size (m)</span>
        </LabelContainer>
        <LabelContainer>
          <Label>Label test string</Label>
          <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - m</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="s">Label test string</Label>
          <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - s</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="xs">Label test string</Label>
          <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - xs</span>
        </LabelContainer>
        <LabelContainer>
          <Label size="2xs">Label test string</Label>
          <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - 2xs</span>
        </LabelContainer>
      </div>
    );
  },
};

const Colors: TextColors[] = [
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

export const LabelColors: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        {Colors.map((color) => (
          <LabelContainer key={color}>
            <Label color={color}>Label test string</Label>
            <span style={{ font: `var(--gds-sys-font-default-body-m-bold)` }}> - {color}</span>
          </LabelContainer>
        ))}
      </div>
    );
  },
};
