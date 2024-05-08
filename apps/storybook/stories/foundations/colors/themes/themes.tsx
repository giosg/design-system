import type { StoryObj as Story } from "@storybook/react";
import type { HTMLAttributes } from "react";
import { ColorCell } from "../colorCell/colorCell";
import { TOKENS } from "./tokens";
import styles from "./themes.module.css";

export const Themes: Story = {
  render: (_, { globals }) => {
    return (
      <div className={styles.themes} data-theme={globals.theme}>
        <ThemeCanvas>
          <h1 className={styles.themeHeader}>
            {globals.theme === "dark" && "🌙 Dark Theme"}
            {globals.theme === "light" && "☀️ Light Theme"}
          </h1>
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
      <div data-testid={"container"} className={styles.container}>
        {TOKENS.map(({ token, groups }, index) => (
          <div className={styles.column} key={`${token}-${index}`}>
            {groups.map(({ label, modificators }) => (
              <div className={styles.group} key={label}>
                <h3>{label}</h3>
                {modificators.map((modificator) => {
                  const variableFromModificator = modificator
                    .replaceAll(".", "-")
                    .replaceAll(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

                  return (
                    <ColorCell
                      key={modificator}
                      label={`sys.color.${token}.${modificator}`}
                      value={variableFromModificator}
                      variablePrefix={`--gds-sys-color-${token}-`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
