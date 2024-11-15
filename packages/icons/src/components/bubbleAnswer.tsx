import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBubbleAnswer(
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
        fillRule="evenodd"
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h4l3.293 3.293A1 1 0 0 0 15 21.586V19h3a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M7.927 11.527l2.292 2.292a.874.874 0 0 0 1.235 0l4.62-4.62a.873.873 0 1 0-1.235-1.234l-4.003 4.003-1.675-1.676a.873.873 0 0 0-1.234 1.235"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBubbleAnswer);
export default ForwardRef;
