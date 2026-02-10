import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBold(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
        d="M15.037 11.575A3.979 3.979 0 0 0 12 5H7v2h1v10H7v2h6a3.989 3.989 0 0 0 2.037-7.425M12 7a2 2 0 0 1 0 4h-2V7Zm1 10h-3v-4h3a2 2 0 0 1 0 4"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
