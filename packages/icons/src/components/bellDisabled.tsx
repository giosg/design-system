import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBellDisabled(
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
        d="M12.814 21c.544 0 1.067-.212 1.452-.59.385-.377.601-.89.601-1.423h-4.106c0 .534.216 1.046.601 1.423.385.378.907.59 1.452.59m6.159-10.066q-.003-.466-.082-.926l-7.104 6.966H20v-1.007l-1.027-2.013zM6.354 18.275l12.92-12.67a.997.997 0 0 0 0-1.423l-.601-.59a1.037 1.037 0 0 0-1.452 0l-1.89 1.855c-.155-.069-.304-.146-.464-.202v-.35h-.024a2 2 0 0 0-.64-1.347A2.08 2.08 0 0 0 12.792 3c-.523 0-1.026.196-1.407.548s-.61.834-.642 1.346h.017v.351A6.15 6.15 0 0 0 7.787 7.45a5.96 5.96 0 0 0-1.132 3.484v3.02L4.3 16.262a.997.997 0 0 0 0 1.423l.601.59a1.037 1.037 0 0 0 1.452 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBellDisabled);
export default ForwardRef;
