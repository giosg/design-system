import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCallAudio(
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
        d="M6 5a5.657 5.657 0 0 0 0 8l5 5a5.657 5.657 0 0 0 8 0l.293-.293a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L15 14l-2 2-5-5 2-2 .293-.293a1 1 0 0 0 0-1.414L7.707 4.707a1 1 0 0 0-1.414 0z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCallAudio);
export default ForwardRef;
