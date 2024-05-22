import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgGraphSelected(
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
        d="M17.25 10H6.75C5.784 10 5 10.895 5 12s.784 2 1.75 2h10.5c.966 0 1.75-.895 1.75-2s-.784-2-1.75-2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGraphSelected);
export default ForwardRef;
