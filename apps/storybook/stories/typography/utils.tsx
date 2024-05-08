import type { HTMLAttributes } from "react";
import type { TextColors } from "@giosg/design-system-typography";
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
  "link",
  "disabled",
  "hover",
  "pressed",
  "active",
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "positive",
  "negative",
  "info",
  "warning",
];
