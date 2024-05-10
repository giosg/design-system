import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgGraphCompared(
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
        d="M16 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGraphCompared);
export default ForwardRef;
