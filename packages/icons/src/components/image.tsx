import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgImage(
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
        d="M13 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-6v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1m-7 17-5.5-5.5L4 20zm5-16H4v13l4-4 .793-.793a1 1 0 0 1 1.414 0L11 13l3.5 3.5L16 15l1.293-1.293a1 1 0 0 1 1.414 0L20 15z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
