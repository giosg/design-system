import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBlockquote(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
        d="M6 8h4a1 1 0 0 1 1 1v4.2a5.03 5.03 0 0 1-2.156 4.191A3.18 3.18 0 0 1 6 17.854v-1.2A3.5 3.5 0 0 0 7.963 14H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m7 1v4a1 1 0 0 0 1 1h1.963A3.5 3.5 0 0 1 14 16.65v1.2a3.18 3.18 0 0 0 2.844-.467A5.03 5.03 0 0 0 19 13.2V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBlockquote);
export default ForwardRef;
