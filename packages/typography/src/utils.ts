/* eslint-disable tsdoc/syntax -- disable for now */
/* eslint-disable @typescript-eslint/no-explicit-any -- Allow any types in this file */
import type { CSSProperties } from "react";
import type React from "react";

const SizeToVarRegex = /^(\d+)/;

/**
 * List of all supported spacing tokens.
 */
export type Spacing =
  | "none"
  | "3xs"
  | "2xs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";

const SpacingSet = new Set<Spacing>([
  "none",
  "3xs",
  "2xs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
]);

type PixelSpacing = `${number}px`;
type PercentSpacing = `${number}%`;
type RemSpacing = `${number}rem`;
type FlexSpacing = Spacing | PixelSpacing | PercentSpacing | RemSpacing;

/**
 * Flex layout props.
 * This is used to provide generic flex support for Flexible components.
 */
export interface Flex {
  grow?: number;
  shrink?: number;
  basis?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: FlexSpacing;
}

const isSpacingToken = (token: string): token is Spacing => {
  return SpacingSet.has(token as Spacing);
};

/**
 * Function that formats the size part of a token to a css variable compatible format.
 * @example "3xl" => "3-xl"; "xl" => "xl";
 *
 */
export const formatSizeToken = (token: Spacing): string => {
  return token.replace(SizeToVarRegex, "$1-");
};

/**
 * Function that generates flex css props for flex layout.
 * This is needed to provide generic flex support for Flexible components.
 */
export const generateFlexCssProps = (props: Flex): CSSProperties => {
  const justifyMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  } as const;

  let gapVar;

  if (props.gap) {
    if (isSpacingToken(props.gap)) {
      gapVar = `var(--gds-sys-space-${formatSizeToken(props.gap)})`;
    } else {
      gapVar = props.gap;
    }
  }

  return {
    "--gds-flex-grow": props.grow,
    "--gds-flex-shrink": props.shrink,
    "--gds-flex-basis": props.basis,
    "--gds-flex-direction": props.direction,
    "--gds-flex-align": props.align,
    "--gds-flex-justify": props.justify ? justifyMap[props.justify] : undefined,
    "--gds-flex-wrap": props.wrap,
    "--gds-flex-gap": gapVar,
  } as React.CSSProperties;
};

/**
 * Function that separate flex props from a component props and group them into a separate flexProps object.
 */
export const separateFlexProps = <T extends Record<string, any> & Flex>(
  props: T,
): { flexProps: Flex } & Omit<T, keyof Flex> => {
  const { grow, shrink, basis, direction, align, justify, wrap, gap, ...resProps } = props;

  return {
    flexProps: {
      grow,
      shrink,
      basis,
      direction,
      align,
      justify,
      wrap,
      gap,
    },
    ...resProps,
  };
};
