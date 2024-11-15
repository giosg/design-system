import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSortDescending(
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
        d="m11.16 19.53-2.924-4.249a1.4 1.4 0 0 1-.23-.64 1.4 1.4 0 0 1 .1-.682 1.2 1.2 0 0 1 .397-.517.97.97 0 0 1 .573-.192h5.848c.203 0 .401.066.573.192.172.125.31.304.397.517.088.212.122.449.1.683a1.4 1.4 0 0 1-.23.64l-2.925 4.25a1.1 1.1 0 0 1-.374.345A.95.95 0 0 1 12 20a.95.95 0 0 1-.466-.124 1.1 1.1 0 0 1-.373-.346M12 5.25 9.076 9.5h5.848zM12 4c.16 0 .32.041.466.122.145.082.273.2.373.347l2.924 4.25c.127.184.206.405.229.64a1.4 1.4 0 0 1-.099.682 1.2 1.2 0 0 1-.396.517.97.97 0 0 1-.573.192H9.076a.97.97 0 0 1-.573-.192 1.2 1.2 0 0 1-.397-.517 1.4 1.4 0 0 1-.1-.683 1.4 1.4 0 0 1 .23-.64l2.924-4.25c.1-.146.228-.264.374-.345A.95.95 0 0 1 11.999 4"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSortDescending);
export default ForwardRef;
