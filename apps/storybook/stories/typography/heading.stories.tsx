import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@giosg/design-system-typography";
import s from "./typography.module.css";
import { Row, SupportedColors } from "./utils";

const meta: Meta = {
  title: "Typography/Heading",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const headingText = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.`;
const headingSizes = ["3xl", "2xl", "xl", "l", "m"] as const;
const headingWeighs = ["bold", "bolder"] as const;
const headingElms = [undefined, "h2", "h3", "h4", "h5", "h6"] as const;

export const Size: Story = {
  render: () => {
    return (
      <div className={s.container}>
        {headingElms.map((as) => {
          return (
            <div className={s.section} key={as}>
              <header className={s.header}>
                <h1 className={s.title}>Heading</h1>
                <div> as {as === undefined ? "<h1> (default)" : `<${as}>`}</div>
              </header>
              <Row>
                <div className={s.description} style={{ width: 400 }}>
                  <span>Default size M</span>
                  <pre>{`<Heading ${as !== undefined ? `as="${as}"` : ""}>`}</pre>
                </div>
                <Heading className={s.heading}>{headingText}</Heading>
              </Row>
              {headingSizes.map((size) => {
                return headingWeighs.map((weight) => {
                  return (
                    <Row key={size + weight + as}>
                      <div className={s.description} style={{ width: 400 }}>
                        <pre>{`<Heading size="${size}" ${weight === "bolder" ? "bolder" : ""} ${as !== undefined ? `as="${as}"` : ""}>`}</pre>
                      </div>
                      <Heading as={as} bolder={weight === "bolder"} className={s.heading} size={size}>
                        {headingText}
                      </Heading>
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

export const Colors: Story = {
  render: () => {
    return (
      <div className={s.container}>
        <div className={s.section}>
          {SupportedColors.map((color) => (
            <Row key={color}>
              <Heading color={color}>{headingText}</Heading>
              <span> - {color}</span>
            </Row>
          ))}
        </div>
      </div>
    );
  },
};
