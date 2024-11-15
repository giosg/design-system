import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgUserHistory(
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
        d="M10 15a6.98 6.98 0 0 0 2.106 5H5.422a2 2 0 0 1-1.847-2.782A7 7 0 0 1 10 13c.1 0 .191.018.288.022A7 7 0 0 0 10 15m12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2 0h-3v-3h-2v5h5zm-10-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserHistory);
export default ForwardRef;
