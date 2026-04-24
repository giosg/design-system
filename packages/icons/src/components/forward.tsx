import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgForward(
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
        d="m16 17-1.425-1.4 4.6-4.6-4.6-4.6L16 5l6 6ZM2 19v-4a4.82 4.82 0 0 1 1.463-3.538A4.82 4.82 0 0 1 7 10h6.175l-3.6-3.6L11 5l6 6-6 6-1.425-1.4 3.6-3.6H7a2.99 2.99 0 0 0-3 3v4Z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgForward);
export default ForwardRef;
