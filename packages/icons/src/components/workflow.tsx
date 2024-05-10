import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflow(
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
        fillRule="evenodd"
        d="M2 5a3 3 0 0 1 3-3h2a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm13.5 2H11V4h7.5a4.5 4.5 0 1 1 0 9H17v-2h1.5a2.5 2.5 0 0 0 0-5M8 12a3 3 0 0 1 3-3h2a3 3 0 1 1 0 6h-2a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-5.5 2a2.5 2.5 0 0 0 0 5H13v2H5.5a4.5 4.5 0 1 1 0-9H7v2zm8.5 6a3 3 0 0 1 3-3h2a3 3 0 1 1 0 6h-2a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflow);
export default ForwardRef;
