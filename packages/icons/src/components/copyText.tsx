import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCopyText(
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
        d="M21 8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12q0 .203.079.389A1 1 0 0 0 8 21h12a1 1 0 0 0 1-1zm-2 11H9V9h10zM5 5v12H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1zm12 8h-6v-2h6zm0 4h-6v-2h6z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCopyText);
export default ForwardRef;
