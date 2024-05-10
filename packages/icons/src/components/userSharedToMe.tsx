import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgUserSharedToMe(
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
        d="M11 13.075V20H7.422a2 2 0 0 1-1.848-2.782A7.01 7.01 0 0 1 11 13.075M16 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0m4 6h-7l2.086 2.086-2.5 2.5 2.828 2.828 2.5-2.5L20 20z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserSharedToMe);
export default ForwardRef;
