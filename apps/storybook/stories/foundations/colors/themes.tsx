import type { StoryObj as Story } from "@storybook/react";
import type { HTMLAttributes } from "react";
import { ColorCell } from "./colorCell/colorCell";
import styles from "./colors.module.css";

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

function generateCellContainer(prefix: string, pallette: readonly (string | number)[], alpha?: boolean) {
  return (
    <div className={styles.cellContainer}>
      {pallette.map((value) => {
        return <ColorCell key={value} value={value} variablePrefix={prefix} />;
      })}
    </div>
  );
}
