import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgList(
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
        d="M20 16a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m-1-5h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2M5 11a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 4a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm1-8H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m13 2a1 1 0 1 0 0-2h-9a1 1 0 0 0 0 2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgList);
export default ForwardRef;
