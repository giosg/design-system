import type { StoryObj as Story } from "@storybook/react";
import { VariableTooltip } from "../../../../components/variableTooltip";
import styles from "./emphasis.module.css";

const LIGHT_TOKENS = [
  { variable: "--gds-ref-color-solid-basics-white", label: "Day White" },
  { variable: "--gds-ref-color-solid-grey-10", label: "Softest 10" },
  { variable: "--gds-ref-color-solid-grey-50", label: "Softer 50" },
  { variable: "--gds-ref-color-solid-grey-100", label: "Soft 100" },
  { variable: "--gds-ref-color-solid-grey-200", label: "Mildest 200" },
  { variable: "--gds-ref-color-solid-grey-300", label: "Milder 300" },
];
const DARK_TOKENS = [
  { variable: "--gds-ref-color-solid-grey-400", label: "Mild 400" },
  { variable: "--gds-ref-color-solid-grey-500", label: "Medium 500" },
  { variable: "--gds-ref-color-solid-grey-600", label: "Strong 600" },
  { variable: "--gds-ref-color-solid-grey-700", label: "Stronger 700" },
  { variable: "--gds-ref-color-solid-grey-800", label: "Srongest 800" },
  { variable: "--gds-ref-color-solid-grey-900", label: "Extreme 900" },
  { variable: "--gds-ref-color-solid-basics-black", label: "Night Black" },
];

export const Emphasis: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        {LIGHT_TOKENS.map(({ variable, label }) => {
          return (
            <VariableTooltip key={variable} variableName={variable}>
              <div className={`${styles.cell} ${styles.lightToken}`} style={{ background: `var(${variable}` }}>
                {label}
              </div>
            </VariableTooltip>
          );
        })}
        {DARK_TOKENS.map(({ variable, label }) => {
          return (
            <VariableTooltip key={variable} variableName={variable}>
              <div
                className={`${styles.cell} ${styles.darkToken}`}
                key={variable}
                style={{ background: `var(${variable}` }}
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
