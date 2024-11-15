import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCallDecline(
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
        d="M21.192 13.657A5.657 5.657 0 0 0 15.536 8H8.465a5.6 5.6 0 0 0-5.657 5.586V14a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1v-3h8v3a1 1 0 0 0 1 1h3.192a1 1 0 0 0 1-1z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCallDecline);
export default ForwardRef;
