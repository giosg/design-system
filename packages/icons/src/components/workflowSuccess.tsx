import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowSuccess(
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
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444" />
        <path d="m10.171 15.27-2.353-2.561a1.02 1.02 0 0 1-.262-.69c0-.258.094-.506.262-.689a.86.86 0 0 1 .634-.286.86.86 0 0 1 .633.286l1.72 1.871 4.11-4.471a.86.86 0 0 1 .634-.286c.237 0 .465.103.633.286s.262.43.262.69c0 .258-.094.506-.262.689l-4.743 5.16a.9.9 0 0 1-.29.212.83.83 0 0 1-.687 0 .9.9 0 0 1-.29-.211" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowSuccess);
export default ForwardRef;
