import type { StoryObj as Story } from "@storybook/react";
import { VariableTooltip } from "../../../../components/variableTooltip";
import styles from "./emphasis.module.css";

const LIGHT_TOKENS = [
  { value: "--gds-ref-color-solid-basics-white", label: "Day White" },
  { value: "--gds-ref-color-solid-grey-10", label: "Softest 10" },
  { value: "--gds-ref-color-solid-grey-50", label: "Softer 50" },
  { value: "--gds-ref-color-solid-grey-100", label: "Soft 100" },
  { value: "--gds-ref-color-solid-grey-200", label: "Mildest 200" },
  { value: "--gds-ref-color-solid-grey-300", label: "Milder 300" },
];
const DARK_TOKENS = [
  { value: "--gds-ref-color-solid-grey-400", label: "Mild 400" },
  { value: "--gds-ref-color-solid-grey-500", label: "Medium 500" },
  { value: "--gds-ref-color-solid-grey-600", label: "Strong 600" },
  { value: "--gds-ref-color-solid-grey-700", label: "Stronger 700" },
  { value: "--gds-ref-color-solid-grey-800", label: "Srongest 800" },
  { value: "--gds-ref-color-solid-grey-900", label: "Extreme 900" },
  { value: "--gds-ref-color-solid-basics-black", label: "Night Black" },
];

export const Emphasis: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        {LIGHT_TOKENS.map(({ value, label }) => {
          return (
            <VariableTooltip key={value} variableName={value}>
              <div className={`${styles.cell} ${styles.lightToken}`} style={{ backgroundColor: `var(${value}` }}>
                {label}
              </div>
            </VariableTooltip>
          );
        })}
        {DARK_TOKENS.map(({ value, label }) => {
          return (
            <VariableTooltip key={value} variableName={value}>
              <div
                className={`${styles.cell} ${styles.darkToken}`}
                key={value}
                style={{ backgroundColor: `var(${value}` }}
              >
                {label}
              </div>
            </VariableTooltip>
          );
        })}
      </div>
    );
  },
};
