import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandMicrosoftDynamics(
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
        d="m8 20 2.846-8.946L8 9.01zm9-5.533V9.388L8 20zM8 4v4.287l5.873 3.155 2.73-2.432z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandMicrosoftDynamics);
export default ForwardRef;
