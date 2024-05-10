import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMicrophoneDisabled(
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
        d="M5.228 15.237A7.93 7.93 0 0 1 4 11h2c0 .967.238 1.92.691 2.775zM15.453 5.012A3.99 3.99 0 0 0 8 7v4c.006.423.082.842.224 1.241zM18 11a6 6 0 0 1-8.384 5.5l1.584-1.581A4 4 0 0 0 16 11v-.879l3.708-3.707L18.293 5l-14 14 1.415 1.414 2.422-2.423a8 8 0 0 0 2.869.94V21h2v-2.069A8 8 0 0 0 20 11z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMicrophoneDisabled);
export default ForwardRef;
