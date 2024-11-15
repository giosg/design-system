import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBellEnabled(
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
        d="M18.5 15.967v1.007H5v-1.007l.964-2.013v-3.02A6.2 6.2 0 0 1 7.028 7.45 5.8 5.8 0 0 1 9.82 5.245v-.35h-.015a2.06 2.06 0 0 1 .602-1.347A1.9 1.9 0 0 1 11.731 3c.492 0 .965.196 1.323.548s.573.834.602 1.346h.023v.351a5.8 5.8 0 0 1 2.793 2.205 6.2 6.2 0 0 1 1.064 3.484v3.02zM11.75 21c.511 0 1.002-.212 1.364-.59.361-.377.565-.89.565-1.423H9.82c0 .534.204 1.046.565 1.423.362.378.853.59 1.364.59"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBellEnabled);
export default ForwardRef;
