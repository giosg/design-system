import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgABTestScheduled(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444M15.556 12v1.778h-5.334V8.444H12V12z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgABTestScheduled);
export default ForwardRef;
