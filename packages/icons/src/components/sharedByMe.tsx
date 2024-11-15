import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSharedByMe(
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
        d="M13.143 12A4.571 4.571 0 1 1 4 12a4.571 4.571 0 0 1 9.143 0m0-8 2.286 2.286-2.286 2.285 2.286 2.286 2.285-2.286L20 10.857V4zm2.286 9.143-2.286 2.286 2.286 2.285L13.143 20H20v-6.857l-2.286 2.286z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSharedByMe);
export default ForwardRef;
