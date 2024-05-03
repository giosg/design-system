import { HTMLAttributes } from "react";
import s from "./typography.module.css";
import { TextColors } from "@giosg/design-system-typography";

export const Row = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.row} {...props} />;
};

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
  "tetriary",
  "quaternary",
  "positive",
  "negative",
  "info",
  "warning",
];
