import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgDataStorage(
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
        d="M20 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H5v-5h14zm0-7H5V6h14zM6 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m4 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-4 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDataStorage);
export default ForwardRef;
