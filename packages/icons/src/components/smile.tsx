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
        fill="currentColor"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444m-2.667-8v-.889a.889.889 0 1 1 1.778 0v.89a.889.889 0 1 1-1.778 0m3.556 0v-.889a.889.889 0 1 1 1.778 0v.89a.889.889 0 0 1-1.778 0M15.556 12a3.556 3.556 0 1 1-7.112 0z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSmile);
export default ForwardRef;
