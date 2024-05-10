import type { SVGProps } from "react";

export type SvgComponentProps = SVGProps<SVGSVGElement> & IconColorSet;

export interface IconColorSet {
  /**
   * Main color of the icon
   */
  color?: IconColors;
  /**
   * Alternative color of the icon
   */
  colorAlt?: IconColors;
  /**
   * Accent color of the icon
   */
  colorAcc?: IconColors;
}

export type IconColors =
  | "default"
  | "dim"
  | "inverted"
  | "on-light"
  | "on-dark"
  | "interactive-default"
  | "interactive-hover"
  | "interactive-active"
  | "interactive-active-hover"
  | "interactive-disabled"
  | "interactive-focused"
  | "interactive-pressed"
  | "primary-default"
  | "secondary-default"
  | "tertiary-default"
  | "quaternary-default"
  | "positive-default"
  | "negative-default"
  | "warning-default"
  | "info-default";

export const generateIconCssVars = (set: IconColorSet): React.CSSProperties => {
  const { color = "default", colorAcc = "interactive-default", colorAlt = "inverted" } = set;

  return {
    "--gds-svg-main": `var(--gds-sys-color-icon-${color})`,
    "--gds-svg-alt": `var(--gds-sys-color-icon-${colorAlt})`,
    "--gds-svg-accent": `var(--gds-sys-color-icon-${colorAcc})`,
  } as React.CSSProperties;
};
