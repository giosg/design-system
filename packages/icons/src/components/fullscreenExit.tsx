import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFullscreenExit(
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
        d="M16 20h-2v-5a1 1 0 0 1 1-1h5v2h-4zM8 8H4v2h5a1 1 0 0 0 1-1V4H8zm0 8v4h2v-5a1 1 0 0 0-1-1H4v2zm8-8V4h-2v5a1 1 0 0 0 1 1h5V8z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFullscreenExit);
export default ForwardRef;
