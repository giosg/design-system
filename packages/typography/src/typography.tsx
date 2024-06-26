import { forwardRef } from "react";
import cx from "classnames";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./typography.module.css";
import {
  type Flex,
  separateFlexProps,
  generateFlexCssProps,
  generateLabelCssVars,
  generateTextCssVars,
  generateHeadingCssVars,
} from "./utils";

/**
 * List of all supported color variants.
 */
export type TextColors =
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

//******************************************
//*                                        *
//*             Label                      *
//*                                        *
//******************************************

export interface LabelCustomProps {
  size?: "m" | "s" | "xs" | "2xs";
  color?: TextColors;
}

export type LabelProps = LabelCustomProps & Flex & React.ComponentPropsWithoutRef<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size, color, className, style, flexProps, ...rest } = separateFlexProps(props);

  return (
    <label
      className={cx(styles.typography, styles.label, "gds-flex", className)}
      style={{
        ...generateLabelCssVars({ size, color }),
        ...generateFlexCssProps(flexProps),
        ...style,
      }}
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
  const { children, className, size, bold, as: Tag = "span", color, style, ...rest } = props;

  return (
    <Slot
      data-size={size}
      data-color={color}
      ref={ref}
      className={cx(styles.typography, styles.text, className)}
      style={{ ...generateTextCssVars({ size, color, bold }), ...style }}
      {...rest}
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
  const { children, className, size, as: Tag = "h1", color, bolder, style, ...rest } = props;

  return (
    <Slot
      data-size={size}
      data-color={color}
      ref={ref}
      className={cx(styles.typography, styles.heading, className)}
      style={
        {
          ...generateHeadingCssVars({ bolder, color, size }),
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <Tag>{children}</Tag>
    </Slot>
  );
});
