import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgUserSharedByMe(
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
        d="M17.578 20H13v-7a7 7 0 0 1 6.425 4.218A2 2 0 0 1 17.578 20M13 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-7.586.586-2.828 2.828 3.5 3.5L4 20h7v-7l-2.086 2.086z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserSharedByMe);
export default ForwardRef;
