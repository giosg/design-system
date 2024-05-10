import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPointerRight(
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
        d="m10.6 16.8 5.333-4a1 1 0 0 0 0-1.6l-5.333-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.6.8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerRight);
export default ForwardRef;
