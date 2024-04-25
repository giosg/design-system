import type { Meta, StoryObj } from "@storybook/react";
import type { HTMLAttributes } from "react";
import { ColorCell } from "./colorCell/colorCell";
import styles from "./colors.module.css";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const SOLID_COLOR_GRADATION = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const ALPHA_COLOR_GRADATION = [10, 20, 40, 60, 80] as const;

type SolidColorGradation = (typeof SOLID_COLOR_GRADATION)[number];
type AlphaColorGradation = (typeof ALPHA_COLOR_GRADATION)[number];

interface Color {
  name: string;
  gradation: Readonly<SolidColorGradation[] | AlphaColorGradation[]> | null;
  token: string;
  type: "solid" | "alpha";
  label?: string;
}

const Colors: Color[] = [
  { name: "Grey", gradation: SOLID_COLOR_GRADATION, token: "grey", type: "solid" },
  { name: "Black/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "black", type: "alpha" },
  { name: "White/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "white", type: "alpha" },
  { name: "Purple", gradation: SOLID_COLOR_GRADATION, token: "purple", type: "solid" },
  { name: "Purple/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "purple", type: "alpha" },
  { name: "Mint", gradation: SOLID_COLOR_GRADATION, token: "mint", type: "solid" },
  { name: "Mint/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "mint", type: "alpha" },
  { name: "Pink", gradation: SOLID_COLOR_GRADATION, token: "pink", type: "solid" },
  { name: "Pink/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "pink", type: "alpha" },
  { name: "Orange", gradation: SOLID_COLOR_GRADATION, token: "orange", type: "solid" },
  { name: "Orange/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "orange", type: "alpha" },
  { name: "Red", gradation: SOLID_COLOR_GRADATION, token: "red", type: "solid" },
  { name: "Red/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "red", type: "alpha" },
  { name: "Green", gradation: SOLID_COLOR_GRADATION, token: "green", type: "solid" },
  { name: "Green/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "green", type: "alpha" },
  { name: "Yellow", gradation: SOLID_COLOR_GRADATION, token: "yellow", type: "solid" },
  { name: "Yellow/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "yellow", type: "alpha" },
  { name: "Blue", gradation: SOLID_COLOR_GRADATION, token: "blue", type: "solid" },
  { name: "Blue/Alpha", gradation: ALPHA_COLOR_GRADATION, token: "blue", type: "alpha" },
  { name: "Transparent", gradation: null, token: "transparent", type: "alpha", label: "Alpha" },
] as const;

const getColorPaletteProp = (color: Color) => {
  const { name, label, gradation, token, type } = color;
  const prefix = `--gds-ref-color-${type}-${token}${gradation ? "-" : ""}`;
  const tokenName = `ref.color.${type}.${token}`;

  return {
    name: label || name,
    prefix,
    tokenName,
    gradation,
  };
};

export const Palette: Story = {
  render: () => {
    const ColorMap = Colors.map((color) => getColorPaletteProp(color));

    return (
      <div className={styles.paletteContainer} data-testid="palette">
        {ColorMap.map(({ name, prefix, tokenName, gradation }) => {
          return (
            <div className={styles.colorGridColumn} key={name}>
              <h3>{name}</h3>
              <div className={styles.cellContainer} key={name}>
                {gradation ? (
                  gradation.map((value) => {
                    return (
                      <ColorCell key={value} label={`${tokenName}.${value}`} value={value} variablePrefix={prefix} />
                    );
                  })
                ) : (
                  <ColorCell key={tokenName} label={tokenName} variablePrefix={prefix} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export const Emphasis: Story = {
  render: () => {
    return <div>TODO: Emphasis</div>;
  },
};

const ShortOptionList = ["strong", "medium", "mild"] as const;
const FullOptionList = ["strongest", "stronger", "strong", "medium", "mild", "milder", "mildest"] as const;

interface ThemeToken {
  token: string;
}
const ThemeTokens = ["text", "icon", "border", "layer", "layer/primary", "layer/alpha", "chart/berry", "chart/orange"];

export const Themes: Story = {
  render: () => {
    return (
      <div className={styles.themes}>
        <ThemeCanvas data-testid="light-theme">
          <h1 className={styles.themeHeader}>Light Theme</h1>
        </ThemeCanvas>
        <ThemeCanvas data-testid="dark-theme" data-theme="dark">
          <h1 className={styles.themeHeader}>Dark Theme</h1>
        </ThemeCanvas>
      </div>
    );
  },
};

function ThemeCanvas(props: HTMLAttributes<HTMLDivElement>) {
  const { children, ...restProps } = props;
  return (
    <div className={styles.themeContainer} {...restProps}>
      {children}
      <div className={styles.section}>
        <h1 className={styles.headerXXL}>Foreground</h1>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Neutral</h3>
          {generateCellContainer("--gds-sys-color-fg-neutral-", [
            "default",
            "strong",
            "medium",
            "mild",
            "milder",
            "mildest",
            "inverted",
          ])}
        </div>
        <div className={styles.horizontalRow}>
          <div className={styles.row}>
            <h3 className={styles.headerM}>Primary</h3>
            {generateCellContainer("--gds-sys-color-fg-primary-", ShortOptionList)}
          </div>
          <div className={styles.row}>
            <h3 className={styles.headerM}>Tertiary</h3>
            {generateCellContainer("--gds-sys-color-fg-tertiary-", ShortOptionList)}
          </div>
        </div>
        <div className={styles.horizontalRow}>
          <div className={styles.row}>
            <h3 className={styles.headerM}>Secondary</h3>
            {generateCellContainer("--gds-sys-color-fg-secondary-", ShortOptionList)}
          </div>
          <div className={styles.row}>
            <h3 className={styles.headerM}>Quaternary</h3>
            {generateCellContainer("--gds-sys-color-fg-quaternary-", ShortOptionList)}
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.headerXXL}>Background</h1>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Neutral</h3>
          {generateCellContainer("--gds-sys-color-bg-neutral-", [
            "default",
            "mildest",
            "milder",
            "mild",
            "medium",
            "strong",
            "inverted",
          ])}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Primary</h3>
          {generateCellContainer("--gds-sys-color-bg-primary-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Secondary</h3>

          {generateCellContainer("--gds-sys-color-bg-secondary-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Tertiary</h3>

          {generateCellContainer("--gds-sys-color-bg-tertiary-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Quaternary</h3>

          {generateCellContainer("--gds-sys-color-bg-quaternary-", FullOptionList)}
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.headerXXL}>Status</h1>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Positive</h3>
          {generateCellContainer("--gds-sys-color-status-positive-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Warning</h3>

          {generateCellContainer("--gds-sys-color-status-warning-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Negative</h3>
          {generateCellContainer("--gds-sys-color-status-negative-", FullOptionList)}
        </div>
        <div className={styles.row}>
          <h3 className={styles.headerM}>Info</h3>
          {generateCellContainer("--gds-sys-color-status-info-", FullOptionList)}
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.headerXXL}>Border</h1>
        <div className={styles.row} style={{ width: "50%" }}>
          <h3 className={styles.headerM}>Neutral</h3>
          {generateCellContainer("--gds-sys-color-border-neutral-", ["inverted", "milder", "mild", "strong"])}
        </div>
        <div className={styles.row} style={{ width: "50%" }}>
          <h3 className={styles.headerM}>Status</h3>
          {generateCellContainer("--gds-sys-color-border-status-", ["info", "negative", "positive", "warning"])}
        </div>
        <div className={styles.row} style={{ width: "50%" }}>
          <h3 className={styles.headerM}>State</h3>
          {generateCellContainer("--gds-sys-color-border-state-", ["focused", "hovered", "pressed"])}
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.headerXXL}>Overlay</h1>
        <div className={styles.row} style={{ width: "50%" }}>
          <h3 className={styles.headerM}>Status</h3>
          {generateCellContainer("--gds-sys-color-overlay-", ["tint", "mild", "strong"], true)}
        </div>
      </div>
    </div>
  );
}

const generateCellContainer = (prefix: string, pallette: readonly (string | number)[], alpha?: boolean) => {
  return (
    <div className={styles.cellContainer}>
      {pallette.map((value) => {
        return <ColorCell key={value} value={value} variablePrefix={prefix} />;
      })}
    </div>
  );
};
