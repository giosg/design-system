import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCollapseAll(
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
        d="M18 11H6a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2M6 9h12a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2m-1 7a1 1 0 0 0 1 1h4v-2H6a1 1 0 0 0-1 1m10.75-.96a1.06 1.06 0 0 0-1.5 0l-2.709 2.71a1.06 1.06 0 1 0 1.5 1.5L15 17.29l1.959 1.96a1.062 1.062 0 1 0 1.5-1.5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCollapseAll);
export default ForwardRef;
