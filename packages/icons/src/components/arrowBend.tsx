import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowBend(
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
        d="m17.749 15.297-3.429 4.445a.85.85 0 0 1-.607.258.85.85 0 0 1-.607-.258l-3.428-4.445a.9.9 0 0 1-.251-.63.9.9 0 0 1 .251-.63.84.84 0 0 1 .607-.26h2.571V12a6.35 6.35 0 0 0-1.759-4.397 5.9 5.9 0 0 0-4.24-1.825.84.84 0 0 1-.606-.26.9.9 0 0 1-.251-.63c0-.235.09-.46.251-.628A.84.84 0 0 1 6.857 4a7.58 7.58 0 0 1 5.452 2.345A8.16 8.16 0 0 1 14.57 12v1.778l2.572-.001a.85.85 0 0 1 .607.26.9.9 0 0 1 .251.63c0 .236-.09.463-.252.63"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowBend);
export default ForwardRef;
