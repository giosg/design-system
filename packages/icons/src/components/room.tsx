import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgRoom(
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
        d="M20 8.4 12 3 4 8.4v7.2l8 5.4 8-5.4zm-8 3.96 4.795 3.24L12 18.84 7.205 15.6zm.889-1.563V5.763l5.333 3.6v5.04z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRoom);
export default ForwardRef;
