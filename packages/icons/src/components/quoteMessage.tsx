import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgQuoteMessage(
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
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.387.92 1 1 0 0 0 .32-.22L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m2 12a2 2 0 0 1-2 2h-4.828l-.586.586L11 19.172V17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM8 9h3v3a2 2 0 0 1-2 2H8v-1a.977.977 0 0 0 1-1H8zm5 0h3v3a2 2 0 0 1-2 2h-1v-1a.977.977 0 0 0 1-1h-1z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgQuoteMessage);
export default ForwardRef;
