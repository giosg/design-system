import type { HTMLAttributes } from "react";
import type { TextColors } from "@giosg-design-system/typography";
import s from "./typography.module.css";

export function Row(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={s.row} {...props} />;
}

export const SupportedColors: TextColors[] = [
  "default",
  "dim",
  "inverted",
  "on-light",
  "on-dark",
  "interactive-default",
  "interactive-hover",
  "interactive-active",
  "interactive-active-hover",
  "interactive-disabled",
  "interactive-focused",
  "interactive-pressed",
  "primary-default",
  "secondary-default",
  "tertiary-default",
  "quaternary-default",
  "positive-default",
  "negative-default",
  "warning-default",
  "info-default",
];
