import type { Meta, StoryObj } from "@storybook/react";
import { VariableTooltip } from "../../../components/variableTooltip";
import styles from "./spacing.module.css";

const meta: Meta = {
  title: "Foundations/Spacing",
};

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true },
    layout: "centered",
  },
  render: () => {
    return (
      <div className={styles.container} data-testid="spacing">
        {[
          "none",
          "5-xs",
          "4-xs",
          "3-xs",
          "2-xs",
          "xs",
          "s",
          "m",
          "l",
          "xl",
          "2-xl",
          "3-xl",
          "4-xl",
          "5-xl",
          "6-xl",
          "7-xl",
          "8-xl",
        ].map((value) => {
          return (
            <div className={styles.itemContainer} key={value}>
              <VariableTooltip variableName={`--gds-sys-space-${value}`}>
                <div
                  className={styles.item}
                  style={{ width: `var(--gds-sys-space-${value})`, height: `var(--gds-sys-space-${value})` }}
                />
              </VariableTooltip>
              <h3>{value.replace("-", "").toUpperCase()}</h3>
            </div>
          );
        })}
      </div>
    );
  },
};
