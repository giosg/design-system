import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLink(
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
        d="M9 11h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 1a2 2 0 0 1 2-2h4a2 2 0 0 0-2-2H7a4 4 0 0 0 0 8h2a2 2 0 0 0 2-2H7a2 2 0 0 1-2-2m12-4h-2a2 2 0 0 0-2 2h4a2 2 0 0 1 0 4h-4a2 2 0 0 0 2 2h2a4 4 0 1 0 0-8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
