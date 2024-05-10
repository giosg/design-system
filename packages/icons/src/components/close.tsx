import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgClose(
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
        <path d="M7.05 8.464A1 1 0 1 1 8.464 7.05l8.486 8.486a1 1 0 0 1-1.414 1.414z" />
        <path d="M8.464 16.95a1 1 0 1 1-1.414-1.414l8.486-8.486a1 1 0 0 1 1.414 1.414z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
