import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgShareAlt(
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
        d="m20 12-6.4-5v3.333H8.267c-1.132 0-2.217.351-3.017.977-.8.625-1.25 1.473-1.25 2.357V17h1.067c0-.884.45-1.732 1.25-2.357s1.885-.976 3.016-.976H13.6V17z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgShareAlt);
export default ForwardRef;
