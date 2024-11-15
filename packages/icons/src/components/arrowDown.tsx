import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowDown(
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
        d="m8.2 15.323 3.17 4.338a.9.9 0 0 0 .284.25.73.73 0 0 0 .692 0 .9.9 0 0 0 .283-.25l3.171-4.338c.103-.14.17-.314.192-.498a1.1 1.1 0 0 0-.068-.54.94.94 0 0 0-.306-.412.74.74 0 0 0-.447-.154h-2.34V4.972c0-.258-.088-.505-.243-.687A.77.77 0 0 0 12.002 4a.77.77 0 0 0-.586.285 1.06 1.06 0 0 0-.243.687v8.747H8.829a.74.74 0 0 0-.447.154.94.94 0 0 0-.306.412c-.066.169-.09.356-.068.54s.088.357.192.498"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
