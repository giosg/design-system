import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSwitchOn(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={24}
      fill="none"
      viewBox="0 0 36 24"
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
      <rect width={32} height={20} x={2} y={2} fill="currentColor" data-color="main" rx={10} />
      <circle cx={24} cy={12} r={7} fill="white" data-color="alt" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSwitchOn);
export default ForwardRef;
