import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgStream(
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
        d="M17 12a4.992 4.992 0 0 0-9.569-2h2.356A2.96 2.96 0 0 1 12 9a2.993 2.993 0 0 1 1 5.816V16.9a5 5 0 0 0 4-4.9m-5-9a9 9 0 0 0-8.77 7h2.064A7 7 0 1 1 13 18.92v2.021A9 9 0 0 0 12 3M7 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 0a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgStream);
export default ForwardRef;
