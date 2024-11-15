import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFlowStep(
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
        d="M19.118 10a1.8 1.8 0 0 1 1.045.337c.31.22.551.532.694.898.142.365.18.767.107 1.155a2.04 2.04 0 0 1-.515 1.024 1.86 1.86 0 0 1-.964.548 1.78 1.78 0 0 1-1.088-.114 1.9 1.9 0 0 1-.844-.737A2.1 2.1 0 0 1 17.234 12c0-.53.199-1.04.552-1.414a1.83 1.83 0 0 1 1.33-.586m0-1c.321.003.64.065.94.184V5c0-.265-.098-.52-.275-.707A.9.9 0 0 0 19.118 4H5.94a.9.9 0 0 0-.665.293A1.03 1.03 0 0 0 5 5v14c0 .265.1.52.276.707A.9.9 0 0 0 5.94 20h13.177a.9.9 0 0 0 .665-.293 1.03 1.03 0 0 0 .276-.707v-4.184a2.5 2.5 0 0 1-1.883 0V18H6.883V6h11.295v3.184c.3-.119.62-.18.94-.184"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFlowStep);
export default ForwardRef;
