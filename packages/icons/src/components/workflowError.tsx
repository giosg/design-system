import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowError(
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
        d="m13.258 12 2.038 2.044-1.257 1.257L12 13.26l-2.044 2.044-1.253-1.26L10.748 12l-2.04-2.044L9.96 8.705l2.044 2.044 2.033-2.038 1.257 1.253zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14.222a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowError);
export default ForwardRef;
