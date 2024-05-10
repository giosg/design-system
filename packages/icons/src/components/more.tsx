import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMore(
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
        d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMore);
export default ForwardRef;
