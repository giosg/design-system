import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowRunning(
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
        d="M20 11.9a8.2 8.2 0 0 1-1.348 4.5 8 8 0 0 1-3.59 2.983 7.9 7.9 0 0 1-4.623.461 7.97 7.97 0 0 1-4.096-2.216 8.13 8.13 0 0 1-2.19-4.148A8.2 8.2 0 0 1 4.61 8.8a8.1 8.1 0 0 1 2.946-3.635A7.93 7.93 0 0 1 12 3.8V2l4.444 2.7L12 7.4V5.6c-1.44 0-2.835.506-3.947 1.43a6.3 6.3 0 0 0-2.155 3.641 6.37 6.37 0 0 0 .615 4.2 6.25 6.25 0 0 0 3.107 2.85 6.15 6.15 0 0 0 4.187.208 6.23 6.23 0 0 0 3.367-2.53 6.36 6.36 0 0 0-.774-7.954l1.257-1.273A8.1 8.1 0 0 1 19.393 8.8c.402.983.608 2.037.607 3.101m-8.889 0a.91.91 0 0 0 .549.832.88.88 0 0 0 .969-.196.9.9 0 0 0 .192-.98.9.9 0 0 0-.327-.404.88.88 0 0 0-1.123.112.9.9 0 0 0-.26.636m-2.667 0c0 .178.053.352.15.5a.89.89 0 0 0 .913.383.9.9 0 0 0 .455-.247.9.9 0 0 0 .193-.98.9.9 0 0 0-.328-.404.88.88 0 0 0-1.122.112.9.9 0 0 0-.26.636m5.334 0a.91.91 0 0 0 .548.832.88.88 0 0 0 .97-.196.9.9 0 0 0 .192-.98.9.9 0 0 0-.327-.404.88.88 0 0 0-1.123.112.9.9 0 0 0-.26.636"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowRunning);
export default ForwardRef;
