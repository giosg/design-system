import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFrown(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
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
        data-color="main"
        fill="currentColor"
        d="M15.7 14.469A4 4 0 0 1 16 16h-1.918a2.082 2.082 0 1 0-4.164 0H8a4 4 0 0 1 1.172-2.828 4 4 0 0 1 6.524 1.3ZM10 11a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m7 1a9 9 0 1 1-9-9 9 9 0 0 1 9 9m-2 0a7 7 0 1 0-7 7 7 7 0 0 0 7-7"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFrown);
export default ForwardRef;
