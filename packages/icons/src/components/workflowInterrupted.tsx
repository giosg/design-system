import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowInterrupted(
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
        d="m13.415 12 2.293 2.3-1.414 1.414L12 13.417l-2.3 2.3L8.291 14.3l2.3-2.3-2.295-2.3 1.41-1.407 2.3 2.3L14.293 8.3l1.414 1.41zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowInterrupted);
export default ForwardRef;
