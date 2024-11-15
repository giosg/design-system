import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgShoppingCart(
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
        d="M10 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-8.586-3H19v2H8.414A2 2 0 0 1 7 12.586l.838-.838L5.307 5H3V3h3.693l.75 2h12.945l-2.667 8H9.414zm1.279-3h6.586l1.333-4H8.193z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgShoppingCart);
export default ForwardRef;
