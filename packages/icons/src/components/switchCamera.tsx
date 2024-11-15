import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSwitchCamera(
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
      <g fill="currentColor" data-color="main">
        <path d="M21 5h-3.586a1 1 0 0 1-.707-.293l-2.414-1.414A1 1 0 0 0 13.586 3h-3.172a1 1 0 0 0-.707.293L7.293 4.707A1 1 0 0 1 6.586 5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6v-2H4V7h3.586a1 1 0 0 0 .707-.293L11 5h2l2.707 1.707a1 1 0 0 0 .707.293H20v3h2V6a1 1 0 0 0-1-1" />
        <path d="m18 11-3-3v2.025a5.49 5.49 0 0 0-3.853 8.828l1.432-1.432A3.477 3.477 0 0 1 15 12.056V14zm.421 2.579A3.477 3.477 0 0 1 16 18.944V17l-3 3 3 3v-2.025a5.49 5.49 0 0 0 3.853-8.828z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSwitchCamera);
export default ForwardRef;
