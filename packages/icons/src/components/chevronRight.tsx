import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgChevronRight(
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
        d="M14.733 12.633a.887.887 0 0 0 0-1.266l-.722-.71-3.456-3.395a.92.92 0 0 0-.993-.194.9.9 0 0 0-.408.33.9.9 0 0 0-.154.497v.154c0 .237.096.465.267.633L12.644 12l-3.377 3.318a.9.9 0 0 0-.267.633v.154c0 .177.053.35.154.497.1.147.242.262.408.33a.93.93 0 0 0 .993-.194l3.456-3.395z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
