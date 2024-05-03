import { forwardRef } from "react";
import cx from "classnames";
import styles from "./typography.module.css";

export type TextColors =
  | "default"
  | "dim"
  | "inverted"
  | "on-light"
  | "on-dark"
  | "link"
  | "disabled"
  | "hover"
  | "pressed"
  | "active"
  | "primary"
  | "secondary"
  | "tetriary"
  | "quaternary"
  | "positive"
  | "negative"
  | "info"
  | "warning";

export interface LabelProps extends React.ComponentProps<"label"> {
  size?: "m" | "s" | "xs" | "2xs";
  color?: TextColors;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size = "m", color = "default", className, style, ...rest } = props;
  return (
    <label
      className={cx(styles.text, styles.label, className)}
      style={{ "--gds-text-color": `var(--gds-sys-color-text-${color})`, ...style } as React.CSSProperties}
      data-size={size}
      data-color={color}
      ref={ref}
      {...rest}
    />
  );
});
