import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSharedByMe(
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
        d="M13 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0-7 2 2-2 2 2 2 2-2 2 2V5zm2 8-2 2 2 2-2 2h6v-6l-2 2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSharedByMe);
export default ForwardRef;
