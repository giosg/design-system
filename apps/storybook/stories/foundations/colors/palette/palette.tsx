import type { StoryObj as Story } from "@storybook/react";
import { ColorCell } from "../colorCell/colorCell";
import styles from "./palette.module.css";

const SOLID_COLOR_GRADATION = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const ALPHA_COLOR_GRADATION = [10, 20, 40, 60, 80];

interface Color {
  name: string;
  gradation: number[] | null;
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
];

function getColorPaletteProp(color: Color) {
  const { name, label, gradation, token, type } = color;
  const prefix = `--gds-ref-color-${type}-${token}${gradation ? "-" : ""}`;
  const tokenWithPrefix = `ref.color.${type}.${token}`;

  return {
    name: label || name,
    prefix,
    tokenWithPrefix,
    gradation,
  };
}

export const Palette: Story = {
  render: () => {
    const ColorMap = Colors.map((color) => getColorPaletteProp(color));

    return (
      <div className={styles.gridLayout} data-testid="palette">
        {ColorMap.map(({ name, prefix, tokenWithPrefix, gradation }) => {
          return (
            <div className={styles.gridColumn} key={name}>
              <h3>{name}</h3>
              <div className={styles.colorColumn} key={name}>
                {gradation ? (
                  gradation.map((value) => {
                    return (
                      <ColorCell
                        key={value}
                        label={`${tokenWithPrefix}.${value}`}
                        value={value}
                        variablePrefix={prefix}
                      />
                    );
                  })
                ) : (
                  <ColorCell key={tokenWithPrefix} label={tokenWithPrefix} variablePrefix={prefix} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};
