import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSharedToMe(
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
        d="M20 12c0 .904-.25 1.788-.72 2.54a4.35 4.35 0 0 1-1.914 1.684 4 4 0 0 1-2.465.26 4.2 4.2 0 0 1-2.185-1.252 4.7 4.7 0 0 1-1.167-2.34 4.9 4.9 0 0 1 .242-2.641 4.5 4.5 0 0 1 1.572-2.052 4.07 4.07 0 0 1 2.37-.77c1.132 0 2.217.481 3.017 1.339.8.857 1.25 2.02 1.25 3.232M6.133 4 4 6.286 6.133 8.57 4 10.857h6.4V4L8.267 6.286zm0 11.429L4 17.714 6.133 20l2.134-2.286L10.4 20v-6.857H4z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSharedToMe);
export default ForwardRef;
