import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgNeutral(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="none"
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
        data-color="main"
        fill="currentColor"
        d="M13 10V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0m-3 1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m11 1a9 9 0 1 1-9-9 9 9 0 0 1 9 9m-2 0a7 7 0 1 0-7 7 7 7 0 0 0 7-7M8 15h8v-2H8Z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgNeutral);
export default ForwardRef;
