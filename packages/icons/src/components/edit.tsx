import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgEdit(
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
        d="M19.734 7.529 16.47 4.266a.91.91 0 0 0-1.287 0l-1.63 1.632-1.366 1.364-7.921 7.922a.9.9 0 0 0-.267.644v3.262a.91.91 0 0 0 .91.91h3.262a.9.9 0 0 0 .644-.267L19.734 8.816a.91.91 0 0 0 0-1.287m-6.26 1.02 1.977 1.976-5.004 5.004-1.976-1.976zM7.797 18.18H5.82v-1.976l1.286-1.286 1.976 1.976zm9.02-9.02L14.84 7.184l.988-.988 1.976 1.976zm1.741 9.93a.91.91 0 0 1-.91.91h-4.549a.91.91 0 0 1 0-1.82h4.55a.91.91 0 0 1 .91.91"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
