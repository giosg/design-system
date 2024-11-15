import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSearch(
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
        d="m19.68 18.186-3.919-3.81a6.28 6.28 0 0 0 1.402-4.434 6.33 6.33 0 0 0-2.045-4.191A6.7 6.7 0 0 0 10.698 4 6.7 6.7 0 0 0 6.22 5.61a6.35 6.35 0 0 0-2.185 4.124A6.27 6.27 0 0 0 5.29 14.21a6.62 6.62 0 0 0 4.034 2.48 6.75 6.75 0 0 0 4.698-.816l3.924 3.814c.205.199.483.31.773.311h.189a1.11 1.11 0 0 0 1.01-.656 1.04 1.04 0 0 0-.237-1.158m-9.07-3.5c-.865 0-1.71-.25-2.43-.717a4.3 4.3 0 0 1-1.611-1.909 4.14 4.14 0 0 1-.25-2.456 4.2 4.2 0 0 1 1.198-2.177c.612-.595 1.391-1 2.24-1.164a4.5 4.5 0 0 1 2.527.242 4.35 4.35 0 0 1 1.963 1.566c.481.7.738 1.521.738 2.362a4.2 4.2 0 0 1-1.282 3.007 4.44 4.44 0 0 1-3.093 1.245"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
