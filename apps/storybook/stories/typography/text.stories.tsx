import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@giosg/design-system-typography";
import s from "./typography.module.css";
import { Row, SupportedColors } from "./utils";

const meta: Meta = {
  title: "Typography/Text",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const sampleText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam natus, enim, cupiditate quibusdam modi, veniam quisquam et in reprehenderit incidunt ea doloribus vel ducimus neque nostrum hic rem aspernatur!`;
const textSizes = ["l", "m", "s", "xs", "2xs"] as const;
const textWeights = ["regular", "bold"] as const;
const textElms = [undefined, "p", "div"] as const;

export const Size: Story = {
  render: () => {
    return (
      <div className={s.container} data-testid="container">
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Text</h1>
          </header>
          <Row>
            <div className={s.description}>
              <span>Default size M</span>
              <pre>{`<Text>`}</pre>
            </div>
            <Text className={s.text}>{sampleText}</Text>
          </Row>
          {textSizes.map((size) => {
            return textWeights.map((weight) => {
              return (
                <Row key={size + weight}>
                  <div className={s.description}>
                    <pre>{`<Text size="${size}" ${weight === "bold" ? "bold" : ""}>`}</pre>
                  </div>
                  <Text bold={weight === "bold"} className={s.text} size={size}>
                    {sampleText}
                  </Text>
                </Row>
              );
            });
          })}
        </div>
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Text</h1>
            <span>(supported tags)</span>
          </header>
          <Row>
            <div className={s.description}>
              <span>Default tag - span </span>
              <pre>{`<Text>`}</pre>
            </div>
            <Text className={s.text}>{sampleText}</Text>
          </Row>
          {textElms.map((elm) => {
            return (
              <Row key={elm || "span"}>
                <div className={s.description}>
                  <pre>{`<Text as="${elm || "span"}">`}</pre>
                </div>
                <Text as={elm} className={s.text}>
                  {sampleText}
                </Text>
              </Row>
            );
          })}
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div className={s.container} data-testid="container">
        <div className={s.textColorsContainer}>
          {SupportedColors.map((color) => (
            <Row key={color}>
              <Text className={s.textColor} color={color}>
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
