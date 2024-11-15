import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLightning(
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
        d="M17.083 10.231H12.6l1.61-5.093a.85.85 0 0 0-.034-.6.9.9 0 0 0-.425-.44.95.95 0 0 0-.618-.077.92.92 0 0 0-.528.321l-6.414 8a.86.86 0 0 0-.097.93.9.9 0 0 0 .34.361.95.95 0 0 0 .485.134h4.483L9.79 18.86a.85.85 0 0 0 .033.6.9.9 0 0 0 .426.441.95.95 0 0 0 .62.077.92.92 0 0 0 .527-.323l6.413-8.002a.86.86 0 0 0 .096-.929.9.9 0 0 0-.339-.36.95.95 0 0 0-.485-.134"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLightning);
export default ForwardRef;
