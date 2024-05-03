import { forwardRef } from "react";
import cx from "classnames";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
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

// eslint-disable-next-line prefer-named-capture-group -- block eslint
const SizeToVarRegex = /^(\d+)/;

//******************************************
//*                                        *
//*             Label                      *
//*                                        *
//******************************************

export interface LabelProps extends React.ComponentProps<"label"> {
  size?: "m" | "s" | "xs" | "2xs";
  color?: TextColors;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size = "m", color = "default", className, style, ...rest } = props;
  return (
    <label
      className={cx(styles.typography, styles.label, className)}
      style={{ "--gds-text-color": `var(--gds-sys-color-text-${color})`, ...style } as React.CSSProperties}
      data-size={size}
      data-color={color}
      ref={ref}
      {...rest}
    />
  );
});
Label.displayName = "Label";

//******************************************
//*                                        *
//*             Text                       *
//*                                        *
//******************************************

type TextElement = React.ElementRef<"span">;
type TextSpanProps = { as?: "span" } & React.ComponentPropsWithoutRef<"span">;
type TextDivProps = { as: "div" } & React.ComponentPropsWithoutRef<"div">;
type TextPProps = { as: "p" } & React.ComponentPropsWithoutRef<"p">;

interface TextUniqueProps {
  size?: "l" | "m" | "s" | "xs" | "2xs";
  color?: TextColors;
  bold?: boolean;
}

export type TextProps = TextUniqueProps & (TextSpanProps | TextDivProps | TextPProps);

export const Text = React.forwardRef<TextElement, TextProps>((props, ref) => {
  const { children, className, size = "m", bold, as: Tag = "span", color = "default", style, ...rest } = props;

  const formattedSize = size.replace(SizeToVarRegex, "$1-");

  return (
    <Slot
      data-size={size}
      data-color={color}
      {...rest}
      ref={ref}
      className={cx(styles.typography, styles.text, className)}
      style={
        {
          "--gds-text-color": `var(--gds-sys-color-text-${color})`,
          "--gds-text-font": `var(--gds-sys-font-default-body-${formattedSize}-${bold ? "bold" : "regular"})`,
          ...style,
        } as React.CSSProperties
      }
    >
      <Tag>{children}</Tag>
    </Slot>
  );
});

// var(--gds-sys-font-default-body-m-regular)
