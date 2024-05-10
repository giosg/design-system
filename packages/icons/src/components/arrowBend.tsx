import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowBend(
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
        d="m19.547 17.297-4.5 4.5a1.135 1.135 0 0 1-1.594 0l-4.5-4.5a1.127 1.127 0 0 1 1.594-1.594l2.578 2.578V12A7.885 7.885 0 0 0 5.25 4.125a1.125 1.125 0 0 1 0-2.25A10.134 10.134 0 0 1 15.375 12v6.281l2.578-2.578a1.127 1.127 0 0 1 1.594 1.594"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowBend);
export default ForwardRef;
