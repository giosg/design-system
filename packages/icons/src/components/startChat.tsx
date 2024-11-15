import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgStartChat(
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
        <path
          fillRule="evenodd"
          d="M13.5 3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2.25v1.939a.75.75 0 0 0 1.28.53L10.5 15h3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-.75 8.25h-7.5v-1.5h7.5zm0-3h-7.5v-1.5h7.5z"
          clipRule="evenodd"
        />
        <path d="m15.97 21.53-2.78-2.78h-1.94v-1.5h2.56l1.94 1.939v-1.94h3.75a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H18v-1.5h1.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2.25V21a.75.75 0 0 1-1.28.53" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgStartChat);
export default ForwardRef;
