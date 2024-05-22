import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowRight(
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
        d="m15.323 15.8 4.338-3.17a.9.9 0 0 0 .25-.284.73.73 0 0 0 0-.692.9.9 0 0 0-.25-.283L15.323 8.2a1.06 1.06 0 0 0-.498-.192 1.1 1.1 0 0 0-.54.068.94.94 0 0 0-.412.306.74.74 0 0 0-.154.447v2.342H4.972c-.258 0-.505.088-.687.243A.77.77 0 0 0 4 12c0 .22.102.43.285.586.182.155.43.243.687.243h8.747v2.342c0 .159.053.314.154.447.1.134.243.24.412.306s.356.09.54.068.357-.089.498-.192"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
