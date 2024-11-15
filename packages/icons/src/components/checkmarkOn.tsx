import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCheckmarkOn(
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
      <path fill="currentColor" d="M15.333 5.506a3 3 0 1 1 3.334 4.988 3 3 0 0 1-3.334-4.988" data-color="accent" />
      <path
        fill="currentColor"
        d="M12.949 10.93 10 13.88 7.121 11A1.5 1.5 0 0 0 5 13.121l3.939 3.94a1.5 1.5 0 0 0 2.122 0l4.327-4.328a5 5 0 0 1-2.44-1.803"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCheckmarkOn);
export default ForwardRef;
