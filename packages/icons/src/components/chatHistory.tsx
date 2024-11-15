import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgChatHistory(
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
        d="M17 9H7V7h10zm-5 2H7v2h5zm-5 6h3v-2H7zm16 0a5.994 5.994 0 0 1-10.463 4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.537A5.98 5.98 0 0 1 23 17m-6 0v-3h-2v5h5v-2zm-5.651 2A5.986 5.986 0 0 1 19 11.349V5H5v14z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChatHistory);
export default ForwardRef;
