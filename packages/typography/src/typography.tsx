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

export interface LabelCustomProps {
  size?: "m" | "s" | "xs" | "2xs";
  color?: TextColors;
}

export type LabelProps = LabelCustomProps & React.ComponentPropsWithoutRef<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size = "m", color = "default", className, style, ...rest } = props;

  const formattedSize = size.replace(SizeToVarRegex, "$1-");

  return (
    <label
      className={cx(styles.typography, styles.label, className)}
      style={
        {
          "--gds-text-color": `var(--gds-sys-color-text-${color})`,
          "--gds-label-font": `var(--gds-sys-font-default-label-${formattedSize}-semibold)`,
          ...style,
        } as React.CSSProperties
      }
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

export interface TextCustomProps {
  size?: "l" | "m" | "s" | "xs" | "2xs";
  color?: TextColors;
  bold?: boolean;
}

export type TextProps = TextCustomProps & (TextSpanProps | TextDivProps | TextPProps);

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

//******************************************
//*                                        *
//*             Heading                    *
//*                                        *
//******************************************

type HeadingElement = React.ElementRef<"h1">;
type HeadingH1Props = { as?: "h1" } & React.ComponentPropsWithoutRef<"h1">;
type HeadingH2Props = { as: "h2" } & React.ComponentPropsWithoutRef<"h2">;
type HeadingH3Props = { as: "h3" } & React.ComponentPropsWithoutRef<"h3">;
type HeadingH4Props = { as: "h4" } & React.ComponentPropsWithoutRef<"h4">;
type HeadingH5Props = { as: "h5" } & React.ComponentPropsWithoutRef<"h5">;
type HeadingH6Props = { as: "h6" } & React.ComponentPropsWithoutRef<"h6">;

export interface HeadingCustomProps {
  size?: "3xl" | "2xl" | "xl" | "l" | "m";
  color?: TextColors;
  bolder?: boolean;
}

export type HeadingProps = HeadingCustomProps &
  (HeadingH1Props | HeadingH2Props | HeadingH3Props | HeadingH4Props | HeadingH5Props | HeadingH6Props);

export const Heading = React.forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  const { children, className, size = "m", as: Tag = "h1", color = "default", bolder, style, ...rest } = props;

  const formattedSize = size.replace(SizeToVarRegex, "$1-");

  return (
    <Slot
      data-size={size}
      data-color={color}
      {...rest}
      ref={ref}
      className={cx(styles.typography, styles.heading, className)}
      style={
        {
          "--gds-text-color": `var(--gds-sys-color-text-${color})`,
          "--gds-heading-font": `var(--gds-sys-font-default-title-${formattedSize}-${bolder ? "black" : "bold"})`,
          ...style,
        } as React.CSSProperties
      }
    >
      <Tag>{children}</Tag>
    </Slot>
  );
});