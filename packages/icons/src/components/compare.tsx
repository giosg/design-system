import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCompare(
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
        <path d="M11.001 11 6 15l5.001 4v-3H17v-2h-5.999z" />
        <path d="M12.999 13 18 9l-5.001-4v3H7v2h5.999z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCompare);
export default ForwardRef;
