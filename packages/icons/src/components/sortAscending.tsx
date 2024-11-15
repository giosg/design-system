import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSortAscending(
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
        d="m12.84 4.47 2.924 4.25c.126.184.205.405.228.639a1.4 1.4 0 0 1-.099.682 1.2 1.2 0 0 1-.396.516.97.97 0 0 1-.572.193h-5.85a.97.97 0 0 1-.572-.192 1.2 1.2 0 0 1-.397-.517 1.4 1.4 0 0 1-.1-.683c.024-.234.103-.456.23-.64l2.924-4.25c.1-.146.229-.264.374-.345A.95.95 0 0 1 12 4q.245 0 .466.124c.146.081.273.2.374.346m2.085 10.03h-5.85L12 18.75zm0-1.25c.203 0 .401.066.573.192.171.125.308.304.396.517.088.212.122.449.099.683a1.36 1.36 0 0 1-.229.639l-2.924 4.25a1.1 1.1 0 0 1-.374.346A.95.95 0 0 1 12 20a.95.95 0 0 1-.466-.123 1.1 1.1 0 0 1-.374-.346l-2.924-4.25a1.36 1.36 0 0 1-.23-.64 1.4 1.4 0 0 1 .1-.683 1.2 1.2 0 0 1 .397-.517.97.97 0 0 1 .573-.191z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSortAscending);
export default ForwardRef;
