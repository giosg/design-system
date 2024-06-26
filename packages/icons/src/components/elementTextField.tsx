import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgElementTextField(
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
        d="M2 3v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m18 17H4V4h16zM17 9H7a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2m0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m-3 4H7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementTextField);
export default ForwardRef;
