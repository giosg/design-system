import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowLeft(
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
        d="m8.349 7.415-4.463 3.826a1 1 0 0 0 0 1.518l4.463 3.826A1 1 0 0 0 10 15.826V13h9a1 1 0 0 0 0-2h-9V8.174a1 1 0 0 0-1.651-.759"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
