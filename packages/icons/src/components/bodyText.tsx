import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBodyText(
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
      <path fill="currentColor" d="M14 19H4v-2h10Zm6-14H4v2h16Zm0 4H4v2h16Zm0 4H4v2h16Z" data-color="main" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBodyText);
export default ForwardRef;
