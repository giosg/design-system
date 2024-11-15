import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMicrophone(
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
        <path d="M18 11.111h-1.5c0 1.415-.474 2.771-1.318 3.771S13.193 16.444 12 16.444c-1.194 0-2.338-.561-3.182-1.562S7.5 12.526 7.5 11.112H6c.001 1.73.535 3.402 1.501 4.7.967 1.298 2.3 2.133 3.749 2.35V20h1.5v-1.84c1.45-.215 2.782-1.05 3.748-2.349.967-1.298 1.5-2.969 1.502-4.7" />
        <path d="M12 14.667c.796 0 1.559-.375 2.121-1.042.563-.666.879-1.57.879-2.514V7.556c0-.943-.316-1.848-.879-2.515C13.56 4.375 12.796 4 12 4s-1.559.375-2.121 1.041C9.316 5.708 9 6.613 9 7.556v3.555c0 .943.316 1.848.879 2.514.562.667 1.325 1.042 2.121 1.042" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
