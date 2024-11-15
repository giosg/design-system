import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSendDisabled(
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
        fillRule="evenodd"
        d="M18.457 11.166 14.9 9.352l-3.371 7.02 6.93-3.532a1.03 1.03 0 0 0 .397-.352.9.9 0 0 0 .145-.483c0-.17-.05-.336-.145-.482a1.03 1.03 0 0 0-.398-.352m-5.433-5.806a1.66 1.66 0 0 0-1.133-.003 1.43 1.43 0 0 0-.808.707l-.515 1.072L6.617 5.13a1.2 1.2 0 0 0-.54-.13c-.189 0-.375.045-.54.13a1 1 0 0 0-.394.353.9.9 0 0 0-.143.481v4.498l3.62.738-.854 1.777L5 13.539v4.496c0 .17.049.336.143.482.095.147.23.269.395.354a1.19 1.19 0 0 0 1.08 0l2.058-1.05 5.119-10.658a1.22 1.22 0 0 0 .036-1.042 1.3 1.3 0 0 0-.319-.45 1.5 1.5 0 0 0-.487-.306"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSendDisabled);
export default ForwardRef;
