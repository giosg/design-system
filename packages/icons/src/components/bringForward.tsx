import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBringForward(
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
        d="M19 9h-3V6a1 1 0 0 0-1-1h-4v2h3v2h-4a1 1 0 0 0-1 1v4H5v1a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-8 9v-7h7v7zM5 8H2l4-5 4 5H7v4H5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBringForward);
export default ForwardRef;
