import type { Ref} from "react";
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
        d="M17.532 10h-4.88l1.754-5.763a1 1 0 0 0-1.748-.9l-6.982 9.052A1 1 0 0 0 6.468 14h4.88l-1.754 5.763a1 1 0 0 0 1.749.9l6.981-9.054A1 1 0 0 0 17.532 10"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLightning);
export default ForwardRef;
