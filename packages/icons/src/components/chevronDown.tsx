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
        d="M11.293 15.293a1 1 0 0 0 1.414 0l.793-.793 3.793-3.793A1 1 0 0 0 16.586 9h-.172a1 1 0 0 0-.707.293L12 13 8.293 9.293A1 1 0 0 0 7.586 9h-.172a1 1 0 0 0-.707 1.707L10.5 14.5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
