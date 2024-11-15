import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMute(
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
        d="m14 14 2-2-2-2 1-1 2 2 2-2 1 1-2 2 2 2-1 1-2-2-2 2zm-3-8.921a1 1 0 0 1 1.005 1v11.84a1 1 0 0 1-1.625.779l-2.832-2.26A2 2 0 0 0 6.3 16H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.3a2 2 0 0 0 1.249-.438L10.375 5.3A.98.98 0 0 1 11 5.079"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMute);
export default ForwardRef;
