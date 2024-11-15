import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgUserChurn(
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
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m1 7.994h-2V18h-2l3 4 3-4h-2zM12 13a7 7 0 0 0-6.425 4.218A2 2 0 0 0 7.422 20H12v-4h2v-3z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserChurn);
export default ForwardRef;
