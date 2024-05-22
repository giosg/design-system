import type { Meta, StoryObj } from "@storybook/react";
import { createElement } from "react";
import { VariableTooltip } from "../../../components/variableTooltip";
import styles from "./typography.module.css";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const text = (
  <span>
    Lorem ipsum dolor sit amet,
    <br /> consectetur adipiscing elit.
  </span>
);

// ------------------------------Headings--------------------------------
const titleLines = [
  {
    variable: "--gds-sys-font-default-title-3-xl-black",
    elm: "h1",
    name: "sys.font.default.title.3XL.black",
  },
  {
    variable: "--gds-sys-font-default-title-3-xl-bold",
    elm: "h1",
    name: "sys.font.default.title.3XL.bold",
  },
  {
    variable: "--gds-sys-font-default-title-2-xl-black",
    elm: "h2",
    name: "sys.font.default.title.2XL.black",
  },
  {
    variable: "--gds-sys-font-default-title-2-xl-bold",
    elm: "h2",
    name: "sys.font.default.title.2XL.bold",
  },
  {
    variable: "--gds-sys-font-default-title-xl-black",
    elm: "h3",
    name: "sys.font.default.title.XL.black",
  },
  {
    variable: "--gds-sys-font-default-title-xl-bold",
    elm: "h3",
    name: "sys.font.default.title.XL.bold",
  },
  {
    variable: "--gds-sys-font-default-title-l-black",
    elm: "h4",
    name: "sys.font.default.title.L.black",
  },
  {
    variable: "--gds-sys-font-default-title-l-bold",
    elm: "h4",
    name: "sys.font.default.title.L.bold",
  },
  {
    variable: "--gds-sys-font-default-title-m-black",
    elm: "h5",
    name: "sys.font.default.title.M.black",
  },
  {
    variable: "--gds-sys-font-default-title-m-bold",
    elm: "h5",
    name: "sys.font.default.title.M.bold",
  },
];

export const Headings: Story = {
  render: () => {
    return (
      <div className={styles.container} data-testid="container">
        {titleLines.map(({ variable, name, elm }, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.name}>{name}</div>
            <VariableTooltip variableName={variable}>
              {createElement(elm, { style: { font: `var(${variable})` } }, text)}
            </VariableTooltip>
          </div>
        ))}
      </div>
    );
  },
};

// ------------------------------Body--------------------------------
const bodyLines = [
  {
    variable: "--gds-sys-font-default-body-l-bold",
    name: "sys.font.default.body.L.bold",
  },
  {
    variable: "--gds-sys-font-default-body-l-regular",
    name: "sys.font.default.body.L.regular",
  },
  {
    variable: "--gds-sys-font-default-body-m-bold",
    name: "sys.font.default.body.M.bold",
  },
  {
    variable: "--gds-sys-font-default-body-m-regular",
    name: "sys.font.default.body.M.regular",
  },
  {
    variable: "--gds-sys-font-default-body-s-bold",
    name: "sys.font.default.body.S.bold",
  },
  {
    variable: "--gds-sys-font-default-body-s-regular",
    name: "sys.font.default.body.S.regular",
  },
  {
    variable: "--gds-sys-font-default-body-xs-bold",
    name: "sys.font.default.body.XS.bold",
  },
  {
    variable: "--gds-sys-font-default-body-xs-regular",
    name: "sys.font.default.body.XS.regular",
  },
  {
    variable: "--gds-sys-font-default-body-2-xs-bold",
    name: "sys.font.default.body.2XS.bold",
  },
  {
    variable: "--gds-sys-font-default-body-2-xs-regular",
    name: "sys.font.default.body.2XS.regular",
  },
];

export const Body: Story = {
  render: () => {
    return (
      <div className={styles.container} data-testid="container">
        {bodyLines.map(({ variable, name }, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.name}>{name}</div>
            <VariableTooltip variableName={variable}>
              {createElement("p", { style: { font: `var(${variable})` } }, text)}
            </VariableTooltip>
          </div>
        ))}
      </div>
    );
  },
};

//-----------------------------Label--------------------------------
const labelLines = [
  {
    variable: "--gds-sys-font-default-label-m-semibold",
    name: "sys.font.default.label.M.semibold",
  },
  {
    variable: "--gds-sys-font-default-label-s-semibold",
    name: "sys.font.default.label.S.semibold",
  },
  {
    variable: "--gds-sys-font-default-label-xs-semibold",
    name: "sys.font.default.label.XS.semibold",
  },
  {
    variable: "--gds-sys-font-default-label-2-xs-semibold",
    name: "sys.font.default.label.2XS.semibold",
  },
];

export const Label: Story = {
  render: () => {
    return (
      <div className={styles.container} data-testid="container">
        {labelLines.map(({ variable, name }, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.name}>{name}</div>
            <VariableTooltip variableName={variable}>
              {createElement("label", { style: { font: `var(${variable})` } }, text)}
            </VariableTooltip>
          </div>
        ))}
      </div>
    );
  },
};
