import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPlay(
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
        d="M6 6.826a.76.76 0 0 1 .123-.413.9.9 0 0 1 .338-.302 1.01 1.01 0 0 1 .925 0l10.149 5.174a.9.9 0 0 1 .34.301A.76.76 0 0 1 18 12a.76.76 0 0 1-.125.414.9.9 0 0 1-.34.302L7.385 17.89a1.01 1.01 0 0 1-.924 0 .9.9 0 0 1-.338-.303.76.76 0 0 1-.123-.413z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
