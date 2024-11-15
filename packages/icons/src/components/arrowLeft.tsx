import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowLeft(
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
        d="m8.677 8.2-4.338 3.17a.9.9 0 0 0-.25.284.73.73 0 0 0 0 .692.9.9 0 0 0 .25.283L8.677 15.8c.14.103.314.17.498.192s.371-.002.54-.068a.94.94 0 0 0 .412-.306.74.74 0 0 0 .154-.447V12.83h8.747c.258 0 .505-.088.687-.243A.77.77 0 0 0 20 12a.77.77 0 0 0-.285-.586 1.06 1.06 0 0 0-.687-.243h-8.747V8.83a.74.74 0 0 0-.154-.447.94.94 0 0 0-.412-.306 1.1 1.1 0 0 0-.54-.068 1.06 1.06 0 0 0-.498.192"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
