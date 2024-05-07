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
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Heading</h1>
          </header>
          <Row>
            <div className={s.description} style={{ width: 400 }}>
              <span>Default size M</span>
              <pre>{`<Heading>`}</pre>
            </div>
            <Heading className={s.heading}>{headingText}</Heading>
          </Row>
          {headingSizes.map((size) => {
            return headingWeighs.map((weight) => {
              return (
                <Row key={size + weight}>
                  <div className={s.description} style={{ width: 400 }}>
                    <pre>{`<Heading size="${size}" ${weight === "bolder" ? "bolder" : ""}>`}</pre>
                  </div>
                  <Heading bolder={weight === "bolder"} className={s.heading} size={size}>
                    {headingText}
                  </Heading>
                </Row>
              );
            });
          })}
        </div>
        <div className={s.section}>
          <header className={s.header}>
            <h1 className={s.title}>Heading</h1>
            <span>(supported tags)</span>
          </header>
          <Row>
            <div className={s.description}>
              <span>Default tag H1</span>
              <pre>{`<Heading>`}</pre>
            </div>
            <Heading className={s.heading}>{headingText}</Heading>
          </Row>
          {headingElms.map((elm) => {
            return (
              <Row key={elm}>
                <div className={s.description}>
                  <pre>{`<Heading as="${elm}">`}</pre>
                </div>
                <Heading as={elm} className={s.heading}>
                  {headingText}
                </Heading>
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
