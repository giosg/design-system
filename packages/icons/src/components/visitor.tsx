import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgVisitor(
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
        <path d="M13.729 13H10.27a1 1 0 0 0-.9 1.45 3 3 0 0 0 5.254 0 1 1 0 0 0-.895-1.45M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path d="M23 12a3 3 0 0 0-3-3h-.41A6.59 6.59 0 0 0 15 4.186V2h-1C8.42 2 5.111 5.271 4.24 9H4a3 3 0 0 0-3 3 3.99 3.99 0 0 0 3.573 3.957 7.99 7.99 0 0 0 14.854 0A3.99 3.99 0 0 0 23 12M4 13.73A2 2 0 0 1 3 12a1 1 0 0 1 1-1zM12 19a6.006 6.006 0 0 1-6-6v-2c0-3.252 2.4-6.54 7-6.957v1.823l.858.123C17.7 6.54 18 10.73 18 12v1a6.007 6.007 0 0 1-6 6m8-5.27V11a1 1 0 0 1 1 1 2 2 0 0 1-1 1.73" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgVisitor);
export default ForwardRef;
