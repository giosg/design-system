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
        d="M16.293 12.707a1 1 0 0 0 0-1.414L15.5 10.5l-3.793-3.793A1 1 0 0 0 10 7.414v.172a1 1 0 0 0 .293.707L14 12l-3.707 3.707a1 1 0 0 0-.293.707v.172a1 1 0 0 0 1.707.707L15.5 13.5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
