import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgNoIssue(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
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
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.007 1 .98.98 0 0 0 .7-.3L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m2 12a2 2 0 0 1-2 2h-4.828l-.586.586L11 19.172V17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Zm-7-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1m-3 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1m6 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgNoIssue);
export default ForwardRef;
