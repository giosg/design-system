import type { Meta, StoryObj } from "@storybook/react";
import { TextColors, Text } from "@giosg/design-system-typography";
import { HTMLAttributes } from "react";
import s from "./typography.module.css";

const meta: Meta = {
  title: "Typography/Text",
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

const sampleText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam natus, enim, cupiditate quibusdam modi, veniam quisquam et in reprehenderit incidunt ea doloribus vel ducimus neque nostrum hic rem aspernatur!`;
const textSizes = ["l", "m", "s", "xs", "2xs"] as const;
const textWeights = ["regular", "bold"] as const;
const textElms = [undefined, "p", "div"] as const;

export const Size: Story = {
  render: (args) => {
    return (
      <div className={s.container}>
        {textElms.map((as) => {
          return (
            <div className={s.section}>
              <header className={s.header}>
                <h1 className={s.title}>Text</h1>
                <div> as {as === undefined ? "<span> (default)" : "<" + as + ">"}</div>
              </header>
              <Row>
                <Text className={s.text}>{sampleText}</Text>
                <div className={s.descriptionContainer}>
                  <span>Default size M</span>
                  <pre>{`<Text>`}</pre>
                </div>
              </Row>
              {textSizes.map((size) => {
                return textWeights.map((weight) => {
                  return (
                    <Row key={size + weight + as}>
                      <Text size={size} bold={weight === "bold"} className={s.text} as={as}>
                        {sampleText}
                      </Text>
                      <div className={s.descriptionContainer}>
                        <pre>{`<Text size="${size}" ${weight === "bold" ? "bold" : ""} ${as !== undefined ? `as="${as}"` : ""}>`}</pre>
                      </div>
                    </Row>
                  );
                });
              })}
            </div>
          );
        })}
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
              <Text color={color} className={s.textColor}>
                {sampleText}
              </Text>
              <span> - {color}</span>
            </Row>
          ))}
        </div>
      </div>
    );
  },
};
