import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLockLocked(
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
        d="M19 8h-2V7A5 5 0 0 0 7 7v1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 7a3 3 0 1 1 6 0v1H9zm9 11H6v-8h12zm-8-4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLockLocked);
export default ForwardRef;
