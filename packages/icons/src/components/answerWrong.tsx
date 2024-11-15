import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAnswerWrong(
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
        <path d="M10.284 11 8 13.284 9.716 15 12 12.716 14.284 15 16 13.284 13.716 11 16 8.716 14.284 7 12 9.284 9.716 7 8 8.716z" />
        <path
          fillRule="evenodd"
          d="M6 19h2.64v3.19a1 1 0 0 0 1.692.72l4.136-3.973.032.063H18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4M18 5H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.64v2.842L13.5 17s.186-.02.422 0H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAnswerWrong);
export default ForwardRef;
