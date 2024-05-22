import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPointerRight(
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
        d="m10.31 15.84 4.363-3.2A.8.8 0 0 0 15 12a.79.79 0 0 0-.327-.64l-4.364-3.2a.83.83 0 0 0-1.187.22A.8.8 0 0 0 9 8.8v6.4a.81.81 0 0 0 .452.716.83.83 0 0 0 .857-.076"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerRight);
export default ForwardRef;
