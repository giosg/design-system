import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgABTestCompleted(
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
        d="M12.005 4a8 8 0 1 0 7.389 4.939A7.99 7.99 0 0 0 12.005 4m0 14.222a6.222 6.222 0 1 1 .007 0zm2.518-8.737 1.257 1.257-4.656 4.662-1.258-1.257-2.07-2.07 1.258-1.257 2.07 2.069z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgABTestCompleted);
export default ForwardRef;
