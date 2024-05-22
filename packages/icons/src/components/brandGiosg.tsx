import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandGiosg(
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
        d="M11.998 4A8 8 0 1 0 20 12a8.01 8.01 0 0 0-8.002-8m-.246 9.596a3.06 3.06 0 0 1-3.534.256 2.17 2.17 0 0 1-.752-1.174 4.668 4.668 0 0 1 9.006-2.455c.137.503.133.746.022.847-.425.385-1.382-.381-2.426-.082-1.166.334-1.01 1.521-2.316 2.608"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandGiosg);
export default ForwardRef;
