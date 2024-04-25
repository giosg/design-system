import type { StoryObj as Story } from "@storybook/react";
import type { HTMLAttributes } from "react";
import { ColorCell } from "../colorCell/colorCell";
import { TOKENS } from "./tokens";
import styles from "./themes.module.css";

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
    <div {...restProps}>
      {children}
      <div className={styles.container}>
        {TOKENS.map(({ token, groups }, index) => (
          <div className={styles.column} key={`${token}-${index}`}>
            {groups.map(({ label, modificators }) => (
              <div className={styles.group} key={label}>
                <h3>{label}</h3>
                {modificators.map((modificator) => (
                  <ColorCell
                    key={modificator}
                    label={`sys.color.${token}.${modificator}`}
                    value={modificator.replaceAll(".", "-")}
                    variablePrefix={`--gds-sys-color-${token}-`}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
