import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgDummyActive(
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
        d="M5 12c-.552 0-1.007-.45-.938-.998a8.004 8.004 0 0 1 6.94-6.94c.548-.069.998.386.998.938v7zm7 7c0 .552.45 1.007.998.938a8.004 8.004 0 0 0 6.94-6.94C20.007 12.45 19.552 12 19 12h-7z"
        data-color="main"
      />
      <path fill="currentColor" d="M16.333 3.506a3 3 0 1 1 3.334 4.988 3 3 0 0 1-3.334-4.988" data-color="accent" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDummyActive);
export default ForwardRef;
