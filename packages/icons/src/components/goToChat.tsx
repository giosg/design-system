import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgGoToChat(
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
        d="M11.006 7 16 11l-4.994 4v-3H8v-2h3.006zM22 7v8a4 4 0 0 1-4 4h-4l-3.293 3.293a.98.98 0 0 1-.7.3 1 1 0 0 1-1.007-1V19H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4m-2 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5v2.172l1.586-1.586.586-.586H18a2 2 0 0 0 2-2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGoToChat);
export default ForwardRef;
