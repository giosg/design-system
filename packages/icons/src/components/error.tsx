import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgError(
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
        d="M4.447 4.447a1.526 1.526 0 0 0 0 2.158L9.842 12l-5.395 5.395a1.526 1.526 0 0 0 2.158 2.158L12 14.158l5.395 5.395a1.526 1.526 0 1 0 2.158-2.158L14.158 12l5.395-5.395a1.526 1.526 0 0 0-2.158-2.158L12 9.842 6.605 4.447a1.526 1.526 0 0 0-2.158 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgError);
export default ForwardRef;
