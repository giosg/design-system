import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgDelete(
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
      <g fill="currentColor" data-color="main">
        <path d="M17 18H7V9H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-2z" />
        <path d="M11 9H9v7h2zm4 0h-2v7h2zm4-4h-3.667L14.3 3.445A1 1 0 0 0 13.465 3h-2.93a1 1 0 0 0-.832.445L8.667 5H5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;
