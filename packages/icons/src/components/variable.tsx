import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgVariable(
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
        d="M3 6a3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1v3.938c0 .789-.307 1.519-.82 2.062.513.543.82 1.273.82 2.062V18a1 1 0 0 0 1 1 1 1 0 0 1 0 2 3 3 0 0 1-3-3v-3.938a1 1 0 0 0-.757-.97l-.486-.122a1 1 0 0 1 0-1.94l.486-.121A1 1 0 0 0 3 9.939zm18 0a3 3 0 0 0-3-3 1 1 0 1 0 0 2 1 1 0 0 1 1 1v3.938c0 .789.307 1.519.82 2.062a3 3 0 0 0-.82 2.062V18a1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 3-3v-3.938a1 1 0 0 1 .758-.97l.485-.122a1 1 0 0 0 0-1.94l-.485-.121a1 1 0 0 1-.758-.97zm-11.71.886a1 1 0 0 0-1.58 1.228L10.734 12l-3.022 3.886a1 1 0 1 0 1.578 1.228L12 13.629l2.71 3.485a1 1 0 0 0 1.58-1.228L13.266 12l3.022-3.886a1 1 0 0 0-1.578-1.228L12 10.371z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgVariable);
export default ForwardRef;
