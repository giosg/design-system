import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFrown(
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
        <path d="M15.556 15.556a3.556 3.556 0 1 0-7.112 0h1.705c0-.244.048-.486.14-.712a1.86 1.86 0 0 1 1-.999 1.86 1.86 0 0 1 2.421 1c.093.225.14.467.14.71zm-4.445-5.334v-.889a.889.889 0 0 0-1.778 0v.89a.889.889 0 0 0 1.778 0m3.556-.001v-.889a.889.889 0 0 0-1.778 0v.89a.889.889 0 0 0 1.778 0" />
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFrown);
export default ForwardRef;
