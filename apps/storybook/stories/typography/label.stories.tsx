import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@giosg/design-system-typography";
import s from "./typography.module.css";
import { Row, SupportedColors } from "./utils";

const meta: Meta = {
  title: "Typography/Label",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const labelText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
const labelSizes = ["m", "s", "xs", "2xs"] as const;

export const Size: Story = {
  render: (args) => {
    return (
      <div className={s.container}>
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Label</h1>
          </header>
          <Row>
            <div className={s.description} style={{ width: 200 }}>
              <span>Default size (m)</span>
              <pre>{`<Label>`}</pre>
            </div>
            <Label className={s.label}>{labelText}</Label>
          </Row>
          {labelSizes.map((size) => {
            return (
              <Row key={size}>
                <div className={s.description} style={{ width: 200 }}>
                  <pre>{`<Label size="${size}">`}</pre>
                </div>
                <Label size={size} className={s.label}>
                  {labelText}
                </Label>
              </Row>
            );
          })}
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: (args) => {
    return (
      <div className={s.container}>
        <div className={s.section}>
          {SupportedColors.map((color) => (
            <Row key={color}>
              <Label color={color}>{labelText}</Label>
              <span> - {color}</span>
            </Row>
          ))}
        </div>
      </div>
    );
  },
};
