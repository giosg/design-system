import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgChevronLeft(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      style={{
        ...generateIconCssVars({
          color,
          colorAcc,
          colorAlt,
        }),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.267 11.367a.887.887 0 0 0 0 1.266l.722.71 3.456 3.395a.92.92 0 0 0 .993.194.9.9 0 0 0 .408-.33c.1-.147.154-.32.154-.497v-.154a.9.9 0 0 0-.267-.633L11.356 12l3.377-3.318A.9.9 0 0 0 15 8.049v-.154a.9.9 0 0 0-.154-.497.9.9 0 0 0-.408-.33.93.93 0 0 0-.993.194l-3.456 3.395z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
