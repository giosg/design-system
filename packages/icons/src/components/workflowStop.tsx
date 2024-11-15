import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowStop(
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
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444" />
        <path d="M9.333 10.222a.89.89 0 0 1 .89-.889h3.555a.89.89 0 0 1 .889.89v3.555a.89.89 0 0 1-.89.889h-3.555a.89.89 0 0 1-.889-.89z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowStop);
export default ForwardRef;
