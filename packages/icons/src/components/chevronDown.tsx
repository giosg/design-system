import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgChevronDown(
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
        d="M11.367 14.733a.887.887 0 0 0 1.266 0l.71-.722 3.395-3.456a.92.92 0 0 0 .194-.993.9.9 0 0 0-.33-.408.9.9 0 0 0-.497-.154h-.154a.9.9 0 0 0-.633.267L12 12.644 8.682 9.267A.9.9 0 0 0 8.049 9h-.154a.9.9 0 0 0-.497.154.9.9 0 0 0-.33.408.93.93 0 0 0 .194.993l3.395 3.456z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
