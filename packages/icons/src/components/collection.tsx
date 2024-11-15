import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCollection(
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
        d="M7.917 5a2.917 2.917 0 1 1 0 5.833 2.917 2.917 0 0 1 0-5.833m5.25 2.917a2.917 2.917 0 1 0 5.833 0 2.917 2.917 0 0 0-5.833 0M5 16.083a2.916 2.916 0 1 0 5.833 0 2.916 2.916 0 0 0-5.833 0m8.167 0a2.916 2.916 0 1 0 5.832 0 2.916 2.916 0 0 0-5.832 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;
