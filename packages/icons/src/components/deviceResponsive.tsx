import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgDeviceResponsive(
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
        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14zM11.536 8.707l-2.829 2.83A1 1 0 0 1 7 10.829V8a1 1 0 0 1 1-1h2.829a1 1 0 0 1 .707 1.707M17 16v-2.829a1 1 0 0 0-1.707-.707l-2.829 2.829A1 1 0 0 0 13.171 17H16a1 1 0 0 0 1-1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDeviceResponsive);
export default ForwardRef;
