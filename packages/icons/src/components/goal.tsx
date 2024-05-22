import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgGoal(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444m0-10.666a4.445 4.445 0 1 0 0 8.889 4.445 4.445 0 0 0 0-8.89m0 7.11a2.666 2.666 0 1 1 0-5.331 2.666 2.666 0 0 1 0 5.332M12.889 12a.888.888 0 1 1-1.777 0 .888.888 0 0 1 1.777 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGoal);
export default ForwardRef;
