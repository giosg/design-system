import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFullscreenEnter(
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
        d="M18 18h-4v2h5a1 1 0 0 0 1-1v-5h-2zM6 6h4V4H5a1 1 0 0 0-1 1v5h2zm0 12v-4H4v5a1 1 0 0 0 1 1h5v-2zM18 6v4h2V5a1 1 0 0 0-1-1h-5v2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFullscreenEnter);
export default ForwardRef;
