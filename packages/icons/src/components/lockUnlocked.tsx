import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLockUnlocked(
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
        <path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path d="M19 8H9V7a2.992 2.992 0 0 1 5.554-1.554l1.434-1.434A4.986 4.986 0 0 0 7 7v1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 10H6v-8h12z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLockUnlocked);
export default ForwardRef;
