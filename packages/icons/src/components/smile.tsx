import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSmile(
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
        data-color="main"
        fill="currentColor"
        d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9m0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7m-3-9V9a1 1 0 0 1 1-1 1 1 0 0 1 1 1v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1m4 0V9a1 1 0 0 1 1-1 1 1 0 0 1 1 1v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1m3 2a4 4 0 0 1-8 0Z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSmile);
export default ForwardRef;
