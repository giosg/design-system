import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSales(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
        d="M11 17h2v-1h1a.98.98 0 0 0 1-1v-3a.98.98 0 0 0-1-1h-3v-1h4V8h-2V7h-2v1h-1a.98.98 0 0 0-1 1v3a.984.984 0 0 0 1 1h3v1H9v2h2Zm-7 3a1.93 1.93 0 0 1-1.413-.588A1.93 1.93 0 0 1 2 18V6a1.93 1.93 0 0 1 .587-1.413A1.93 1.93 0 0 1 4 4h16a2 2 0 0 1 2 2v12a2.006 2.006 0 0 1-2 2Zm0-2h16V6H4Zm0 0"
        className="cls-1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSales);
export default ForwardRef;
