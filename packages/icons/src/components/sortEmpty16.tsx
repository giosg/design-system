import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSortEmpty16(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
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
        d="M6.081 6 8 3.6 9.919 6zM4 7h8L8 2zm5.919 3L8 12.4 6.081 10zM12 9H4l4 5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSortEmpty16);
export default ForwardRef;
